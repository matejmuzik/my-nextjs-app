import Stripe from 'stripe'
import { NextRequest, NextResponse } from 'next/server'

// ⚠️ CRITICAL: Disable Edge Runtime - Stripe requires Node.js
export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const { amount, orderId, email, product, market } = await request.json()
    
    console.log('[Checkout Session] Received POST request:', { amount, orderId, email, product, market })
    console.log('[Checkout Session] Runtime:', process.env.NODE_ENV)
    console.log('[Checkout Session] ENV check:', {
      hasStripeKey: !!process.env.STRIPE_SECRET_KEY,
      stripeKeyPrefix: process.env.STRIPE_SECRET_KEY?.substring(0, 8),
    })

    if (!amount || !orderId || !email) {
      console.warn('[Checkout Session] Missing required fields')
      return NextResponse.json(
        { error: 'Chybí povinné pole (amount, orderId, email)' },
        { status: 400 }
      )
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('[Checkout Session] STRIPE_SECRET_KEY environment variable is missing!')
      console.error('[Checkout Session] Available env vars:', Object.keys(process.env).filter(k => k.includes('STRIPE')))
      return NextResponse.json(
        { error: 'Chyba serveru: STRIPE_SECRET_KEY není nastavený ve Vercel Environment Variables' },
        { status: 500 }
      )
    }

    // Initialize Stripe with explicit options
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2024-06-20' as any,
      httpClient: undefined,
    })
    
    console.log('[Checkout Session] ✅ Stripe initialized successfully')

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'apple_pay', 'google_pay'],
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
