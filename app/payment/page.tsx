'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function PaymentPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [market, setMarket] = useState('')
  const [product, setProduct] = useState('')
  const [price, setPrice] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  useEffect(() => {
    // Načíst data z localStorage
    const storedEmail = localStorage.getItem('checkout_email')
    const storedMarket = localStorage.getItem('checkout_market')
    const storedProduct = localStorage.getItem('checkout_product')
    const storedPrice = localStorage.getItem('checkout_price')

    if (!storedEmail || !storedMarket || !storedProduct) {
      router.push('/checkout')
      return
    }

    setEmail(storedEmail)
    setMarket(storedMarket)
    setProduct(storedProduct)
    setPrice(parseInt(storedPrice || '0'))
  }, [router])

  const handleSimulatePayment = async () => {
    setLoading(true)
    setError('')

    try {
      // Simulace zaplacení (v reálné aplikaci by zde byla Stripe integraci)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Vytvoření objednávky po "zaplacení"
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          market,
          product,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || 'Chyba při vytváření objednávky')
        setLoading(false)
        return
      }

      // Vyčistit localStorage
      localStorage.removeItem('checkout_email')
      localStorage.removeItem('checkout_market')
      localStorage.removeItem('checkout_product')
      localStorage.removeItem('checkout_price')

      // Přesměrovat na po-zaplaceni
      const orderId = data.order?.id
      router.push(
        `/po-zaplaceni?email=${encodeURIComponent(email)}&orderId=${orderId}&product=${product}`
      )
    } catch (err) {
      setError('Chyba při zpracování platby')
      setLoading(false)
    }
  }

  if (!price) {
    return (
      <div className="bg-[var(--page-bg)] text-gray-100 overflow-hidden min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400">Načítám...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[var(--page-bg)] text-gray-100 overflow-hidden min-h-screen flex items-center justify-center">
      <section className="max-w-2xl mx-auto px-6 py-32 w-full">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl leading-tight font-extrabold text-white mb-12">
            Zaplacení
          </h1>

          <div className="bg-gray-900/30 border border-gray-700 rounded-lg p-8 md:p-12">
            {/* Souhrn objednávky */}
            <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-6 mb-8">
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-400">Email:</span>
                  <span className="text-white font-medium">{email}</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-gray-600">
                  <span className="text-gray-400">Typ produktu:</span>
                  <span className="text-white font-medium">
                    {product === 'dataset' ? 'Dataset' : 'Dataset + Dashboard'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-2xl font-bold text-white">Celkem k zaplacení:</span>
                  <span className="text-3xl font-bold text-[#047BEC]">{price} Kč</span>
                </div>
              </div>
            </div>

            {/* Placeholder pro Stripe */}
            <div className="mb-8 p-6 bg-blue-900/20 border border-blue-700 rounded-lg">
              <p className="text-blue-300 text-sm font-medium mb-2">🧪 Test mode</p>
              <p className="text-blue-300 text-sm">
                V tuto chvíli je tohle demo verze. Kliknutím na tlačítko níže se simuluje úspěšná
                platba a objednávka se vytvoří.
              </p>
            </div>

            {error && (
              <div className="text-red-400 text-sm bg-red-900/20 border border-red-700 rounded-lg p-3 mb-6">
                {error}
              </div>
            )}

            <button
              onClick={handleSimulatePayment}
              disabled={loading}
              className="w-full bg-[#047BEC] text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors disabled:opacity-50 mb-4"
            >
              {loading ? 'Zpracovávám platbu...' : `Zaplatit ${price} Kč`}
            </button>

            <button
              onClick={() => router.back()}
              disabled={loading}
              className="w-full bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-600 transition-colors disabled:opacity-50"
            >
              Zpět
            </button>
          </div>

          <div className="mt-8">
            <Link href="/" className="inline-block text-gray-400 hover:text-white transition-colors text-sm">
              ← Domů
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
