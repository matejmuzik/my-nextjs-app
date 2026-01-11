"use client"

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage('✓ Zpráva byla úspěšně odeslána! Brzy se vám ozveme.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setMessage(`✗ Chyba: ${data.error}`)
      }
    } catch (error) {
      setMessage('✗ Chyba při odesílání zprávy')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="bg-[var(--page-bg)] text-gray-100 overflow-hidden">
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 md:items-end">
          <div className="col-span-1 md:col-span-5 flex flex-col h-full order-1 md:order-none">
            <h1 className="text-4xl md:text-[72px] leading-tight font-extrabold text-white mb-8">
              Kontakt
            </h1>

            <p className="text-gray-300 text-lg md:text-xl mb-4 leading-relaxed">
              Máte dotaz k datasetům, metodice nebo dostupným trhům?
            </p>

            <p className="text-gray-400 text-base md:text-lg mb-12 leading-relaxed">
              Ozvěte se nám - odpovídáme obvykle do 24–48 hodin.
            </p>

            <div className="hidden md:block border border-gray-700 rounded-lg p-6 bg-gray-900/30 mt-auto">
              <h3 className="text-lg font-bold text-white mb-3">Alternativně</h3>
              <p className="text-gray-400 text-base mb-2">
                Pokud je to pro vás jednodušší, napište nám přímo na:
              </p>
              <a href="mailto:info@datlamo.cz" className="text-[#047BEC] text-base font-semibold hover:underline">
                info@datlamo.cz
              </a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-7 flex flex-col md:flex-row md:justify-end order-2 md:order-none">
            <form 
              className="flex flex-col gap-4 w-full md:w-4/5"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Jméno nebo název firmy"
                className="w-full bg-gray-800 text-white placeholder-gray-500 rounded-lg px-6 py-4 border border-gray-700 focus:border-[#047BEC] focus:outline-none transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />

              <input
                type="email"
                placeholder="E-mail"
                className="w-full bg-gray-800 text-white placeholder-gray-500 rounded-lg px-6 py-4 border border-gray-700 focus:border-[#047BEC] focus:outline-none transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />

              <textarea
                placeholder="Zpráva (stručně popište dotaz nebo kontext)"
                rows={6}
                className="w-full bg-gray-800 text-white placeholder-gray-500 rounded-lg px-6 py-4 border border-gray-700 focus:border-[#047BEC] focus:outline-none transition-colors resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />

              {message && (
                <div className={`p-3 rounded-lg ${message.startsWith('✓') ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}>
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#047BEC] text-white font-semibold py-4 rounded-lg hover:bg-blue-600 transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Odesílá se...' : 'Odeslat zprávu'}
              </button>
            </form>
          </div>

          <div className="col-span-1 md:hidden border border-gray-700 rounded-lg p-6 bg-gray-900/30 order-3">
            <h3 className="text-lg font-bold text-white mb-3">Alternativně</h3>
            <p className="text-gray-400 text-base mb-2">
              Pokud je to pro vás jednodušší, napište nám přímo na:
            </p>
            <a href="mailto:info@datlamo.cz" className="text-[#047BEC] text-base font-semibold hover:underline">
              info@datlamo.cz
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
