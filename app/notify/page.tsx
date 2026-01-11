'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function NotifyPage() {
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const market = searchParams.get('market') || 'praha'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, market }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || 'Chyba')
        setLoading(false)
        return
      }

      setSubmitted(true)
      // Redirect after 3 seconds
      setTimeout(() => {
        window.location.href = '/produkty'
      }, 3000)
    } catch (err) {
      setError('Chyba při komunikaci se serverem')
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-[var(--page-bg)] text-gray-100 overflow-hidden min-h-screen flex items-center justify-center">
        <section className="max-w-2xl mx-auto px-6 py-32 w-full text-center">
          <div className="mb-8">
            <svg className="w-20 h-20 mx-auto text-[#047BEC] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl leading-tight font-extrabold text-white mb-6">
            Děkujeme!
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-6 max-w-xl mx-auto">
            Zaregistrovali jsme vaši žádost. Pošleme vám e-mail, jakmile bude produkt dostupný.
          </p>

          <p className="text-gray-400 text-sm mb-8">
            Přesměrujeme vás za chvíli...
          </p>

          <Link
            href="/produkty"
            className="inline-block bg-[#047BEC] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors"
          >
            Zpět na produkty
          </Link>
        </section>
      </div>
    )
  }

  return (
    <div className="bg-[var(--page-bg)] text-gray-100 overflow-hidden min-h-screen flex items-center justify-center">
      <section className="max-w-2xl mx-auto px-6 py-32 w-full">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl leading-tight font-extrabold text-white mb-12">
            Upozornit mě
          </h1>

          <div className="bg-gray-900/30 border border-gray-700 rounded-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
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
                <h2 className="text-xl font-bold text-white mb-3">
                  Na tento e-mail vás upozorníme po přidání trhu.
                </h2>
                <p className="text-gray-400 text-sm">
                  Zašleme vám všechny potřebné informace o daném produktu a budete mezi prvními, kdo bude moci koupit.
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#047BEC] text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
              >
                {loading ? 'Registruji...' : 'Upozornit mě'}
              </button>
            </form>
          </div>

          <div className="mt-8">
            <Link
              href="/produkty"
              className="inline-block text-gray-400 hover:text-white transition-colors text-sm"
            >
              ← Zpět na produkty
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
