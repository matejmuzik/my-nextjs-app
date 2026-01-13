'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function PaymentPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [product, setProduct] = useState('')
  const [price, setPrice] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const storedEmail = localStorage.getItem('checkout_email')
    const storedMarket = localStorage.getItem('checkout_market')
    const storedProduct = localStorage.getItem('checkout_product')
    const storedPrice = localStorage.getItem('checkout_price')

    if (!storedEmail || !storedMarket || !storedProduct) {
      router.push('/checkout')
      return
    }

    setEmail(storedEmail)
    setProduct(storedProduct)
    setPrice(parseInt(storedPrice || '0'))
    setLoading(false)
  }, [router])

  const handlePayment = async () => {
    setLoading(true)
    setError('')

    try {
      const storedEmail = localStorage.getItem('checkout_email')
      const storedMarket = localStorage.getItem('checkout_market')
      const storedProduct = localStorage.getItem('checkout_product')
      const storedPrice = localStorage.getItem('checkout_price')

      // 1. Vytvoř objednávku (bez emailu - pending status)
      const orderResponse = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: storedEmail,
          market: storedMarket,
          product: storedProduct,
        }),
      })

      if (!orderResponse.ok) {
        const data = await orderResponse.json()
        setError(data.message || 'Chyba při vytváření objednávky')
        setLoading(false)
        return
      }

      const orderData = await orderResponse.json()
      const orderId = orderData.order?.id

      // 2. Vytvořit Stripe Checkout Session
      const checkoutResponse = await fetch('/api/stripe/checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: parseInt(storedPrice || '0'),
          orderId,
          email: storedEmail,
          product: storedProduct,
          market: storedMarket,
        }),
      })

      if (!checkoutResponse.ok) {
        const text = await checkoutResponse.text()
        console.error('[Checkout] Response status:', checkoutResponse.status)
        console.error('[Checkout] Response text:', text)
        try {
          const data = JSON.parse(text)
          setError(data.error || 'Chyba při vytváření platby')
        } catch {
          setError(`Chyba serveru (${checkoutResponse.status}): ${text.substring(0, 100)}`)
        }
        setLoading(false)
        return
      }

      const { url } = await checkoutResponse.json()
      console.log('[Checkout] Session URL:', url)

      // 3. Přesměruj na Stripe Checkout
      if (url) {
        window.location.href = url
      }
    } catch (err: any) {
      setError(err.message || 'Neznámá chyba')
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <p className="text-gray-400">Načítám...</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Platba</h1>

        {/* Souhrn objednávky */}
        <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-6 mb-8">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Email:</span>
              <span className="text-white font-medium">{email}</span>
            </div>
            <div className="flex justify-between pb-3 border-b border-gray-600">
              <span className="text-gray-400">Typ produktu:</span>
              <span className="text-white font-medium">{product}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-2xl font-bold text-white">Celkem k zaplacení:</span>
              <span className="text-3xl font-bold text-[#047BEC]">{price} Kč</span>
            </div>
          </div>
        </div>

        {error && (
          <div className="bg-red-900/30 border border-red-500 rounded-lg p-6 text-red-400 mb-6">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <button
            onClick={handlePayment}
            disabled={loading}
            className="w-full bg-[#047BEC] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Zpracovávám...' : 'Pokračovat k platbě'}
          </button>

          <button
            onClick={() => router.back()}
            className="w-full bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
          >
            Zpět
          </button>
        </div>

        <p className="text-gray-400 text-sm text-center mt-6">
          Zpět na <Link href="/produkty" className="text-[#047BEC] hover:underline">produkty</Link>
        </p>
      </div>
    </div>
  )
}
