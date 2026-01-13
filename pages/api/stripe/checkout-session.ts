import Stripe from 'stripe'
import type { NextApiRequest, NextApiResponse } from 'next'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

type ResponseData = {
  url?: string
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
    const { amount, orderId, email, product, market } = req.body

    if (!amount || !orderId || !email) {
      return res.status(400).json({ 
        error: 'Chybí povinné pole' 
      })
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'czk',
            product_data: {
              name: `Dataset - ${market}`,
              description: `Product: ${product}`,
            },
            unit_amount: Math.round(amount * 100),
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/po-zaplaceni?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/payment`,
      customer_email: email,
      metadata: {
        orderId,
        product,
        market,
      },
    })

    console.log('[Checkout Session] Created session:', session.id, 'URL:', session.url)

    if (!session.url) {
      return res.status(500).json({
        error: 'Stripe session nevrátil URL',
      })
    }

    return res.status(200).json({
      url: session.url,
    })
  } catch (error: any) {
    console.error('Stripe Checkout error:', error)
    return res.status(500).json({
      error: error.message || 'Chyba při vytváření platby',
    })
  }
}
