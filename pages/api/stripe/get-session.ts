import Stripe from 'stripe'
import type { NextApiRequest, NextApiResponse } from 'next'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

type ResponseData = {
  orderId?: string
  email?: string
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { sessionId } = req.query

    if (!sessionId || typeof sessionId !== 'string') {
      return res.status(400).json({ error: 'Chybí sessionId' })
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId)

    return res.status(200).json({
      orderId: session.metadata?.orderId,
      email: session.customer_email || '',
    })
  } catch (error: any) {
    console.error('Get Session error:', error)
    return res.status(500).json({
      error: error.message || 'Chyba',
    })
  }
}
