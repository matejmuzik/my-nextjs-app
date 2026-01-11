import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { readFile } from 'fs/promises'
import path from 'path'

// Force dynamic rendering pro API route s parametry
export const dynamic = 'force-dynamic'
export const revalidate = 0

// Řekni Next.js aby negeneroval static routes pro dynamic parametr
export async function generateStaticParams() {
  return []
}

export const runtime = 'nodejs'

const prisma = new PrismaClient()

export async function GET(
  request: NextRequest,
  { params }: { params: { orderId: string } }
): Promise<NextResponse> {
  try {
    const orderId = params.orderId

    // Najít objednávku v databázi
    const order = await prisma.order.findUnique({
      where: { orderId },
    })

    if (!order) {
      return NextResponse.json(
        { success: false, message: 'Objednávka nenalezena' },
        { status: 404 }
      )
    }

    // Ověřit, že objednávka je zaplacena
    if (order.status !== 'completed') {
      return NextResponse.json(
        { success: false, message: 'Objednávka nebyla zaplacena' },
        { status: 403 }
      )
    }

    // Mapování product na název souboru
    const zipFilename =
      order.product === 'dataset'
        ? `dataset_${order.market}.zip`
        : `dataset+dashboard_${order.market}.zip`

    // Cesta k ZIP souboru
    const zipPath = path.join(process.cwd(), 'public', 'zip', zipFilename)

    // Načíst ZIP soubor
    const zipContent = await readFile(zipPath)

    const response = new NextResponse(zipContent)
    response.headers.set('Content-Type', 'application/zip')
    response.headers.set(
      'Content-Disposition',
      `attachment; filename="Fitness-${order.market.toUpperCase()}-${order.orderId}.zip"`
    )

    console.log(`[Download] Downloaded: ${order.orderId} by ${order.email}`)
    return response
  } catch (error) {
    console.error('[Download] Error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Chyba při stahování souboru',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
