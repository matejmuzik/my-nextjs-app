import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { isValidEmail } from '@/lib/utils'
import { sendEmail, getNotificationEmail } from '@/lib/email'

const prisma = new PrismaClient()

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json()
    const { email, market } = body

    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email je povinný' },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: 'Neplatný email' },
        { status: 400 }
      )
    }

    // Zkontrolovat, jestli už email existuje
    const existing = await prisma.notification.findUnique({
      where: { email },
    })

    if (existing) {
      return NextResponse.json(
        { success: false, message: 'Tento email už je zaregistrován' },
        { status: 409 }
      )
    }

    // Vytvořit novou notifikaci
    const notification = await prisma.notification.create({
      data: { email },
    })

    console.log(`[Notify] Registered notification for: ${email}`)

    // Odeslat potvrzovací email
    const emailHtml = getNotificationEmail(email, market || 'praha')

    const emailResult = await sendEmail({
      to: email,
      subject: 'Upozornění bylo zaregistrováno',
      html: emailHtml,
    })

    if (!emailResult.success) {
      console.warn('[Notify] Email failed to send:', emailResult.error)
      // Pokračuj i když se email nepodařilo odeslat
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Registrace úspěšná. Pošleme vám email, jakmile bude dostupné.',
        notification,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('[Notify] Error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Chyba při registraci',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

export async function GET(): Promise<NextResponse> {
  try {
    const notifications = await prisma.notification.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(
      { success: true, notifications },
      { status: 200 }
    )
  } catch (error) {
    console.error('[Notify] Error:', error)
    return NextResponse.json(
      { success: false, message: 'Chyba při načítání' },
      { status: 500 }
    )
  }
}
