import Stripe from 'stripe'
import { NextRequest, NextResponse } from 'next/server'

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

    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('[Checkout Session] STRIPE_SECRET_KEY is not set')
      return NextResponse.json(
        { error: 'Server error: Missing Stripe key' },
        { status: 500 }
      )
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    console.log('[Checkout Session] Stripe initialized')

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
