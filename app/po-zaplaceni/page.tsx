'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState, useEffect, Suspense } from 'react'

function SuccessContent() {
  const searchParams = useSearchParams()
  const [hasDashboard, setHasDashboard] = useState(false)
  const [orderId, setOrderId] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    const product = searchParams.get('product')
    const orderIdParam = searchParams.get('orderId')
    const emailParam = searchParams.get('email')
    
    setHasDashboard(product === 'dashboard' || product === 'bundle')
    setOrderId(orderIdParam)
    setEmail(emailParam)
  }, [searchParams])

  return (
    <div className="bg-[var(--page-bg)] text-gray-100 overflow-hidden">
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-[72px] leading-tight font-extrabold text-white mb-6">
            Děkujeme za nákup
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Váš datový balíček je připraven ke stažení. Níže najdete vše potřebné k okamžité práci s daty.
          </p>
          {orderId && (
            <div className="text-gray-400 text-sm mt-4 max-w-2xl mx-auto">
              Číslo objednávky: <span className="text-[#047BEC] font-semibold">{orderId}</span>
            </div>
          )}
        </div>

        {/* Download Section */}
        <div className="bg-gray-900/30 border border-gray-700 rounded-lg p-8 mb-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Stáhnout datový balíček</h2>
          
          {orderId ? (
            <>
              <a
                href={`/api/download/${orderId}`}
                className="bg-[#047BEC] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors mb-4 inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Stáhnout ZIP balíček
              </a>
              <p className="text-gray-400 text-sm">
                Odkaz na stažení jsme vám poslali také na e-mail: <span className="text-white font-semibold">{email || '—'}</span>
              </p>
            </>
          ) : (
            <p className="text-red-400">Chyba: Objednávka nenalezena. Vraťte se zpět a zkuste znovu.</p>
          )}
        </div>

        {/* What's Included */}
        <div className="bg-gray-900/30 border border-gray-700 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Co ZIP balíček obsahuje</h2>
          
          <ul className="space-y-4">
            <li className="text-gray-300 flex items-start gap-3">
              <span className="text-[#047BEC] font-bold mt-1">•</span>
              <span><strong>data.xlsx</strong> - tabulkový soubor, předdělán pro analýzu</span>
            </li>
            <li className="text-gray-300 flex items-start gap-3">
              <span className="text-[#047BEC] font-bold mt-1">•</span>
              <span><strong>dashboard.pbix</strong> (pokud zakoupeno) - Interaktivní Power BI dashboard</span>
            </li>
            <li className="text-gray-300 flex items-start gap-3">
              <span className="text-[#047BEC] font-bold mt-1">•</span>
              <span><strong>metodika.pdf</strong> - popisy dat, indexů a výpočtů</span>
            </li>
            <li className="text-gray-300 flex items-start gap-3">
              <span className="text-[#047BEC] font-bold mt-1">•</span>
              <span><strong>licence.txt</strong> - podmínky použití dat</span>
            </li>
          </ul>
        </div>

        {/* How to Start */}
        <div className="bg-gray-900/30 border border-gray-700 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Jak začít</h2>
          
          <ol className="space-y-4 list-decimal list-inside">
            <li className="text-gray-300">
              Otevřete soubor <strong className="text-white">dataset.xlsx</strong> v Excelu nebo Google Sheets
            </li>
            <li className="text-gray-300">
              Pokud máte dashboard, otevřete <strong className="text-white">dashboard.pbix</strong> v Power BI Desktop (zdarma)
            </li>
            <li className="text-gray-300">
              Podívejte se do PDF <strong className="text-white">metodiky</strong> pro vysvětlení indexů a struktury dat
            </li>
          </ol>
        </div>

        {/* Two Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Updates */}
          <div className="bg-gray-900/30 border border-gray-700 rounded-lg p-8">
            <h3 className="text-xl font-bold text-white mb-4">Aktualizace</h3>
            <p className="text-gray-300">
              Dataset je aktualizován 1x ročně. Novou verzi datasetu je nutné si zakoupit, není součástí tohoto produktu.
            </p>
          </div>

          {/* License */}
          <div className="bg-gray-900/30 border border-gray-700 rounded-lg p-8">
            <h3 className="text-xl font-bold text-white mb-4">Licence</h3>
            <p className="text-gray-300">
              Data můžete používat pro vlastní analýzu a rozhodování. Dataset není SIR a prodávat jako samostatný produkt.
            </p>
          </div>
        </div>

        {/* Need Help */}
        <div className="text-center bg-gray-900/30 border border-gray-700 rounded-lg p-8 mb-16">
          <h2 className="text-xl font-bold text-white mb-4">Potřebujete pomoc?</h2>
          <Link
            href="/kontakt"
            className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-white hover:text-black transition-colors"
          >
            Kontaktujte nás zde
          </Link>
        </div>

        {/* Explore More */}
        <div className="text-center">
          <h2 className="text-3xl md:text-[48px] leading-tight font-extrabold text-white mb-8">
            Chcete prozkoumat další trhy?
          </h2>
          <Link
            href="/produkty"
            className="inline-block bg-[#047BEC] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors"
          >
            Prozkoumat trhy
          </Link>
        </div>
      </section>
    </div>
  )
}
export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="bg-[var(--page-bg)] text-white p-8">Načítání...</div>}>
      <SuccessContent />
    </Suspense>
  )
}