export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-gray-100 flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo/Title */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-7xl font-extrabold text-[#047BEC] mb-4">
            Datlamo
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            Přesná tržní data pro vaši obchodní strategii
          </p>
        </div>

        {/* Coming Soon */}
        <div className="mb-12">
          <div className="inline-block px-6 py-2 bg-[#047BEC]/20 border border-[#047BEC] rounded-full mb-8">
            <span className="text-[#047BEC] font-semibold text-sm">Připravujeme se</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Brzy pro vás otevřeme!
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            Právě finalizujeme všechny administrativní detaily a vnitřní procesy, 
            abychom vám mohli poskytnout nejkvalitnější službu s bezpečným a 
            spolehlivým platebním systémem.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#1a1f2e] p-6 rounded-lg border border-gray-700">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-bold text-lg mb-2">Přesná Data</h3>
            <p className="text-gray-400 text-sm">
              Aktuální tržní informace z fitness průmyslu
            </p>
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-lg border border-gray-700">
            <div className="text-3xl mb-3">📈</div>
            <h3 className="font-bold text-lg mb-2">Analýzy</h3>
            <p className="text-gray-400 text-sm">
              Interaktivní dashboardy pro lepší rozhodování
            </p>
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-lg border border-gray-700">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-bold text-lg mb-2">Bezpečnost</h3>
            <p className="text-gray-400 text-sm">
              Bezpečné a ověřené platby se Stripe
            </p>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-[#1a1f2e] border border-[#047BEC] rounded-lg p-8 mb-12">
          <h3 className="text-xl font-bold mb-4">
            Chcete být mezi prvními?
          </h3>
          <p className="text-gray-400 mb-6">
            Zanechte nám svůj email a upozorníme vás, jakmile budeme připraveni
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Váš email"
              className="flex-1 px-4 py-3 bg-[#0B0C10] border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#047BEC]"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#047BEC] text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors whitespace-nowrap"
            >
              Upozornit mě
            </button>
          </form>
        </div>

        {/* Contact */}
        <div className="text-gray-500 text-sm">
          <p className="mb-4">Máte otázky?</p>
          <a
            href="mailto:info@datlamo.cz"
            className="text-[#047BEC] hover:underline font-semibold"
          >
            Kontaktujte nás: info@datlamo.cz
          </a>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-500 text-xs">
            © 2026 Datlamo. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </div>
  )
}
