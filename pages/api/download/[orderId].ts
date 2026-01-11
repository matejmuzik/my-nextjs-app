import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { readFile } from 'fs/promises'
import path from 'path'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { orderId } = req.query

    if (!orderId || typeof orderId !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Chybí ID objednávky',
      })
    }

    // Najít objednávku v databázi
    const order = await prisma.order.findUnique({
      where: { orderId },
    })

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Objednávka nenalezena',
      })
    }

    // Ověřit, že objednávka je zaplacena
    if (order.status !== 'completed') {
      return res.status(403).json({
        success: false,
        message: 'Objednávka nebyla zaplacena',
      })
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

    // Nastavit headers a odeslat file
    res.setHeader('Content-Type', 'application/zip')
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="Fitness-${order.market.toUpperCase()}-${order.orderId}.zip"`
    )

    console.log(`[Download] Downloaded: ${order.orderId} by ${order.email}`)
    return res.end(zipContent)
  } catch (error) {
    console.error('[Download] Error:', error)
    return res.status(500).json({
      success: false,
      message: 'Chyba při stahování souboru',
      error: error instanceof Error ? error.message : 'Unknown error',
    })
  }
}
