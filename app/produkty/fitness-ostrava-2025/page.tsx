import Link from 'next/link'

export default function ProductPage() {
  return (
    <div className="bg-[var(--page-bg)] text-gray-100 overflow-hidden">
      <section className="max-w-7xl mx-auto px-6 py-32 hero-section">
        <h1 className="text-4xl md:text-[72px] leading-tight font-extrabold text-white mb-6">
          Fitness Ostrava 2025
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-3xl">
          Tržní data z 180+ fitness center. Přesné ceny, nabídky, reputace a analytické indexy v jednom souboru.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <span className="bg-gray-800 text-gray-300 px-4 py-2 rounded text-sm">Dataset (XLSX)</span>
          <span className="bg-gray-800 text-gray-300 px-4 py-2 rounded text-sm">Power BI dashboard</span>
          <span className="bg-gray-800 text-gray-300 px-4 py-2 rounded text-sm">PDF metodika</span>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-0 -mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dataset Card */}
          <div className="border border-gray-700 rounded-lg p-8 bg-gray-900/30 hover:bg-gray-900/50 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <img src="/excel.svg" alt="Excel" className="w-10 h-10" />
              <h3 className="text-2xl font-bold text-white">Dataset</h3>
            </div>
            
            <div className="mb-6">
              <div className="text-4xl font-bold text-white mb-2">490 Kč</div>
              <p className="text-gray-400 text-sm">Jednorazový nákup</p>
            </div>

            <p className="text-gray-300 text-base mb-8 leading-relaxed">
              Excel soubor (.xlsx) se strukturovanými daty o 60+ posilovnách po celé Ostravě
            </p>

            <Link
              href="/checkout?market=ostrava&product=dataset"
              className="block w-full bg-[#047BEC] text-white text-center font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Zakoupít datový soubor
            </Link>
          </div>

          {/* Dataset + Dashboard Card */}
          <div className="border border-gray-700 rounded-lg p-8 bg-gray-900/30 hover:bg-gray-900/50 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <img src="/powerbi.svg" alt="Power BI" className="w-10 h-10" />
              <h3 className="text-2xl font-bold text-white">Dataset + Dashboard</h3>
            </div>
            
            <div className="mb-6">
              <div className="text-4xl font-bold text-white mb-2">1 490 Kč</div>
              <p className="text-gray-400 text-sm">Jednorazový nákup</p>
            </div>

            <p className="text-gray-300 text-base mb-8 leading-relaxed">
              Dataset a interaktivní dashboard se srovnávacími grafy, mapou a mnohem více
            </p>

            <Link
              href="/checkout?market=ostrava&product=bundle"
              className="block w-full bg-[#047BEC] text-white text-center font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Zakoupít balíček
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-32">
        <h2 className="text-3xl md:text-[48px] leading-tight font-extrabold text-white mb-16">
          Co produkty obsahují
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dataset Column */}
          <div className="bg-gray-900/30 border border-gray-700 rounded-lg p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <img src="/excel.svg" alt="Excel" className="w-8 h-8" />
              <h3 className="text-xl font-bold text-white">Dataset (XLSX)</h3>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-[#047BEC] font-bold mt-0.5">•</span>
                <span>podniky</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-[#047BEC] font-bold mt-0.5">•</span>
                <span>ceny</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-[#047BEC] font-bold mt-0.5">•</span>
                <span>služby</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-[#047BEC] font-bold mt-0.5">•</span>
                <span>Google hodnocení</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-[#047BEC] font-bold mt-0.5">•</span>
                <span>indexy (CI, GI, VIM)</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-[#047BEC] font-bold mt-0.5">•</span>
                <span>insight-ready tabulky</span>
              </li>
            </ul>

            <div className="w-full h-48 bg-gray-800/50 rounded mb-6 flex items-center justify-center overflow-hidden">
              <img src="/images/excelnahled.png" alt="Excel náhled" className="w-full h-full object-cover" />
            </div>

            <a
              href="/datasets/Dataset%20ukázka.xlsx"
              download="fitness-ostrava-sample.xlsx"
              className="block w-full border border-[#047BEC] text-[#047BEC] text-center font-semibold py-3 rounded-lg hover:bg-[#047BEC] hover:text-white transition-colors"
            >
              Stáhnout ukázku
            </a>
          </div>

          {/* Dashboard Column */}
          <div className="bg-gray-900/30 border border-gray-700 rounded-lg p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <img src="/powerbi.svg" alt="Power BI" className="w-8 h-8" />
              <h3 className="text-xl font-bold text-white">Dashboard (Power BI)</h3>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-[#047BEC] font-bold mt-0.5">•</span>
                <span>cenová analýza</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-[#047BEC] font-bold mt-0.5">•</span>
                <span>reputace</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-[#047BEC] font-bold mt-0.5">•</span>
                <span>Value for Money</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-[#047BEC] font-bold mt-0.5">•</span>
                <span>TOP zřizovatelé</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-[#047BEC] font-bold mt-0.5">•</span>
                <span>interaktivní mapa</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-[#047BEC] font-bold mt-0.5">•</span>
                <span>pokročilé filtry</span>
              </li>
            </ul>

            <div className="w-full h-48 bg-gray-800/50 rounded mb-6 flex items-center justify-center overflow-hidden">
              <img src="/images/dashboardnáhled.png" alt="Dashboard náhled" className="w-full h-full object-cover" />
            </div>

            <a
              href="/datasets/Dashboard%20pro%20uk%C3%A1zku.pbix"
              download="Dashboard-pro-ukázku.pbix"
              className="block w-full border border-[#047BEC] text-[#047BEC] text-center font-semibold py-3 rounded-lg hover:bg-[#047BEC] hover:text-white transition-colors"
            >
              Stáhnout dashboard
            </a>
          </div>

          {/* Metodika Column */}
          <div className="bg-gray-900/30 border border-gray-700 rounded-lg p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <img src="/pdf.svg" alt="PDF" className="w-8 h-8" />
              <h3 className="text-xl font-bold text-white">PDF Metodika</h3>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-[#047BEC] font-bold mt-0.5">•</span>
                <span>součástí obou produktů</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-[#047BEC] font-bold mt-0.5">•</span>
                <span>struktura dat</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-[#047BEC] font-bold mt-0.5">•</span>
                <span>výpočet indexů</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-[#047BEC] font-bold mt-0.5">•</span>
                <span>interpretace</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-[#047BEC] font-bold mt-0.5">•</span>
                <span>poznámky o trhu</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-[#047BEC] font-bold mt-0.5">•</span>
                <span>doporučení a možnosti využití</span>
              </li>
            </ul>

            <div className="w-full h-48 bg-gray-800/50 rounded mb-6 flex items-center justify-center overflow-hidden">
              <img src="/images/pdfnahled.png" alt="PDF náhled" className="w-full h-full object-cover" />
            </div>

            <button
              disabled
              className="block w-full border border-gray-600 text-gray-500 text-center font-semibold py-3 rounded-lg bg-gray-900/50 cursor-not-allowed"
            >
              K dispozici s produktem
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-4 text-center">
        <Link
          href="/produkty"
          className="inline-flex border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-white hover:text-black transition-colors items-center gap-2"
        >
          ← Zpět na výběr trhů
        </Link>
      </section>
    </div>
  )
}
