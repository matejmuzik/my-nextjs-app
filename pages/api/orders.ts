import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { generateConfirmationCode, generateOrderId, isValidEmail, getPriceForProduct } from '@/lib/utils'
import { sendEmail, getOrderConfirmationEmail } from '@/lib/email'
import type { OrderRequest, OrderResponse, ProductType, Market } from '@/lib/types'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<OrderResponse>
) {
  if (req.method === 'POST') {
    try {
      const body: OrderRequest = req.body

      if (!body.email || !body.product || !body.market) {
        return res.status(400).json({
          success: false,
          message: 'Chybí povinné pole',
          error: 'Missing required fields',
        })
      }

      if (!isValidEmail(body.email)) {
        return res.status(400).json({
          success: false,
          message: 'Neplatný email',
          error: 'Invalid email format',
        })
      }

      if (!['dataset', 'bundle'].includes(body.product)) {
        return res.status(400).json({
          success: false,
          message: 'Neplatný typ produktu',
          error: 'Invalid product type',
        })
      }

      if (!['praha', 'brno', 'ostrava'].includes(body.market)) {
        return res.status(400).json({
          success: false,
          message: 'Neplatný trh',
          error: 'Invalid market',
        })
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
          status: 'completed',
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
      }

      return res.status(201).json({
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
      })
    } catch (error) {
      console.error('[Orders] Error:', error)
      return res.status(500).json({
        success: false,
        message: 'Chyba při vytváření objednávky',
        error: error instanceof Error ? error.message : 'Unknown error',
      })
    }
  } else if (req.method === 'GET') {
    try {
      const { id: orderId } = req.query

      if (!orderId || typeof orderId !== 'string') {
        return res.status(400).json({
          success: false,
          message: 'Chybí ID objednávky',
        })
      }

      const order = await prisma.order.findUnique({
        where: { orderId },
      })

      if (!order) {
        return res.status(404).json({
          success: false,
          message: 'Objednávka nenalezena',
        })
      }

      return res.status(200).json({
        success: true,
        message: 'Objednávka nalezena',
        order: {
          id: order.orderId,
          email: order.email,
          product: order.product as ProductType,
          market: order.market as Market,
          confirmationCode: order.confirmationCode,
          createdAt: order.createdAt,
          status: order.status as 'pending' | 'paid' | 'completed',
        },
      })
    } catch (error) {
      console.error('[Orders] Error:', error)
      return res.status(500).json({
        success: false,
        message: 'Chyba při načítání objednávky',
      })
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    return res.status(405).json({ error: `Method ${req.method} not allowed` } as any)
  }
}
