import Stripe from 'stripe'
import type { NextApiRequest, NextApiResponse } from 'next'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
})

type ResponseData = {
  clientSecret?: string
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
    const { amount, orderId, email } = req.body

    if (!amount || !orderId || !email) {
      return res.status(400).json({ 
        error: 'Chybí povinné pole: amount, orderId, email' 
      })
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: 'czk',
      metadata: {
        orderId,
        email,
      },
      description: `Order ${orderId}`,
    })

    return res.status(200).json({
      clientSecret: paymentIntent.client_secret || '',
    })
  } catch (error: any) {
    console.error('Stripe error:', error)
    return res.status(500).json({
      error: error.message || 'Chyba při vytváření platby',
    })
  }
}
