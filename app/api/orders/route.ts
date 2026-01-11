import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { generateConfirmationCode, generateOrderId, isValidEmail, getPriceForProduct } from '@/lib/utils'
import { sendEmail, getOrderConfirmationEmail } from '@/lib/email'
import type { OrderRequest, OrderResponse, ProductType, Market } from '@/lib/types'

export const dynamic = 'force-dynamic'

const prisma = new PrismaClient()

export async function POST(request: NextRequest): Promise<NextResponse<OrderResponse>> {
  try {
    const body: OrderRequest = await request.json()

    if (!body.email || !body.product || !body.market) {
      return NextResponse.json(
        { success: false, message: 'Chybí povinné pole', error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { success: false, message: 'Neplatný email', error: 'Invalid email format' },
        { status: 400 }
      )
    }

    if (!['dataset', 'bundle'].includes(body.product)) {
      return NextResponse.json(
        { success: false, message: 'Neplatný typ produktu', error: 'Invalid product type' },
        { status: 400 }
      )
    }

    if (!['praha', 'brno', 'ostrava'].includes(body.market)) {
      return NextResponse.json(
        { success: false, message: 'Neplatný trh', error: 'Invalid market' },
        { status: 400 }
      )
    }

    const orderId = generateOrderId()
    const confirmationCode = generateConfirmationCode()
    const price = getPriceForProduct(body.product, body.market)

    const order = await prisma.order.create({
      data: {
        orderId,
        email: body.email,
        product: body.product,
        market: body.market,
        price,
        confirmationCode,
        status: 'completed', // Označit jako zaplaceno (po zaplacení)
      },
    })

    console.log(`[Orders] Created order: ${order.orderId} for ${order.email}`)

    // Odeslat potvrzovací email
    const emailHtml = getOrderConfirmationEmail(
      body.email,
      orderId,
      confirmationCode,
      body.product,
      body.market,
      price
    )

    const emailResult = await sendEmail({
      to: body.email,
      subject: `✓ Objednávka potvrena - ${orderId}`,
      html: emailHtml,
    })

    if (!emailResult.success) {
      console.warn('[Orders] Email failed to send:', emailResult.error)
      // Pokračuj i když se email nepodařilo odeslat
    }

    return NextResponse.json(
      {
        success: true,
        message: `Objednávka vytvořena. Potvrzovací kód: ${confirmationCode}`,
        order: {
          id: order.orderId,
          email: order.email,
          product: order.product as ProductType,
          market: order.market as Market,
          confirmationCode: order.confirmationCode,
          createdAt: order.createdAt,
          status: order.status as 'pending' | 'paid' | 'completed',
        },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('[Orders] Error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Chyba při vytváření objednávky',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const searchParams = request.nextUrl.searchParams
  const orderId = searchParams.get('id')

  if (!orderId) {
    return NextResponse.json(
      { success: false, message: 'Chybí ID objednávky' },
      { status: 400 }
    )
  }

  const order = await prisma.order.findUnique({
    where: { orderId },
  })

  if (!order) {
    return NextResponse.json(
      { success: false, message: 'Objednávka nenalezena' },
      { status: 404 }
    )
  }

  return NextResponse.json(
    {
      success: true,
      order: {
        id: order.orderId,
        email: order.email,
        product: order.product as ProductType,
        market: order.market as Market,
        confirmationCode: order.confirmationCode,
        createdAt: order.createdAt,
        status: order.status as 'pending' | 'paid' | 'completed',
      },
    },
    { status: 200 }
  )
}
