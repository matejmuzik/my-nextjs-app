import Stripe from 'stripe'
import { NextRequest, NextResponse } from 'next/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(request: NextRequest) {
  try {
    const { amount, orderId, email, product, market } = await request.json()
    
    console.log('[Checkout Session] Received request:', { amount, orderId, email, product, market })

    if (!amount || !orderId || !email) {
      return NextResponse.json(
        { error: 'Chybí povinné pole' },
        { status: 400 }
      )
    }

    console.log('[Checkout Session] STRIPE_SECRET_KEY exists:', !!process.env.STRIPE_SECRET_KEY)

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
      return NextResponse.json(
        { error: 'Stripe session nevrátil URL' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      url: session.url,
    })
  } catch (error: any) {
    console.error('Stripe Checkout error:', error)
    return NextResponse.json(
      { error: error.message || 'Chyba při vytváření platby' },
      { status: 500 }
    )
  }
}
