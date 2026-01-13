import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { sendEmail, getOrderConfirmationEmail } from '@/lib/email'
import Stripe from 'stripe'

const prisma = new PrismaClient()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
})

type ResponseData = {
  success?: boolean
  message?: string
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { sessionId } = req.body

    if (!sessionId) {
      return res.status(400).json({ 
        error: 'Chybí sessionId' 
      })
    }

    // Ověř session u Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (session.payment_status !== 'paid') {
      return res.status(400).json({
        error: 'Platba nebyla potvrzena',
      })
    }

    const orderId = session.metadata?.orderId

    if (!orderId) {
      return res.status(400).json({
        error: 'Objednávka nenalezena',
      })
    }

    // Aktualizuj objednávku na 'completed'
    const order = await prisma.order.update({
      where: { orderId },
      data: { status: 'completed' },
    })

    console.log(`[Confirm Payment] Order ${orderId} marked as completed`)

    // Pošli email s datasetem
    const emailHtml = getOrderConfirmationEmail(
      order.email,
      orderId,
      order.confirmationCode,
      order.product as any,
      order.market as any,
      order.price
    )

    const emailResult = await sendEmail({
      to: order.email,
      subject: `✓ Objednávka potvrena - ${orderId}`,
      html: emailHtml,
    })

    if (!emailResult.success) {
      console.warn('[Confirm Payment] Email failed to send:', emailResult.error)
    }

    return res.status(200).json({
      success: true,
      message: 'Platba potvrzena a email odeslán',
    })
  } catch (error: any) {
    console.error('[Confirm Payment] Error:', error)
    return res.status(500).json({
      error: error.message || 'Chyba při potvrzování platby',
    })
  }
}
