'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useState, Suspense } from 'react'
import { getPriceForProduct, getProductName } from '@/lib/utils'

function CheckoutContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const market = (searchParams?.get('market') || 'praha') as string
  const product = (searchParams?.get('product') || 'dataset') as string
  const price = getPriceForProduct(product, market)
  const productName = getProductName(market, product)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // Ověření emailu
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        setError('Zadej prosím platný email')
        setLoading(false)
        return
      }

      // Uložit do localStorage
      localStorage.setItem('checkout_email', email)
      localStorage.setItem('checkout_market', market)
      localStorage.setItem('checkout_product', product)
      localStorage.setItem('checkout_price', price.toString())

      // Přesměrovat na payment
      router.push('/payment')
    } catch (err) {
      setError('Chyba při zpracování')
      setLoading(false)
    }
  }

  return (
    <div className="bg-[var(--page-bg)] text-gray-100 overflow-hidden min-h-screen flex items-center justify-center">
      <section className="max-w-2xl mx-auto px-6 py-32 w-full">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl leading-tight font-extrabold text-white mb-12">
            Dokončení objednávky
          </h1>

          <div className="bg-gray-900/30 border border-gray-700 rounded-lg p-8 md:p-12">
            {/* Souhrn produktu */}
            <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-6 mb-8">
              <div className="flex justify-between items-start mb-4">
                <div className="text-left">
                  <h2 className="text-lg font-bold text-white">{productName}</h2>
                  <p className="text-gray-400 text-sm mt-1">
                    {product === 'dataset' ? 'Dataset pouze' : 'Dataset + interaktivní dashboard'}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-[#047BEC]">{price} Kč</p>
                  <p className="text-gray-400 text-xs mt-2">bez DPH*</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">E-mail</label>
                <input
                  type="email"
                  placeholder="tvuj@email.cz"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#047BEC] transition-colors disabled:opacity-50"
                />
              </div>

              {error && (
                <div className="text-red-400 text-sm bg-red-900/20 border border-red-700 rounded-lg p-3">
                  {error}
                </div>
              )}

              <div className="text-left">
                <p className="text-gray-400 text-sm">
                  Na tento e-mail vám pošleme odkaz ke stažení po zaplacení a informace k produktu.
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#047BEC] text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
              >
                {loading ? 'Zpracovávám...' : `Pokračovat k zaplacení → ${price} Kč`}
              </button>
            </form>
          </div>

          <div className="mt-8">
            <Link href="/produkty" className="inline-block text-gray-400 hover:text-white transition-colors text-sm">
              ← Zpět na produkty
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="bg-[var(--page-bg)] text-white p-8">Načítání...</div>}>
      <CheckoutContent />
    </Suspense>
  )
}