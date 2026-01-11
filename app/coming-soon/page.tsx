export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-gray-100 flex items-center justify-center px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold text-[#047BEC] mb-6">
          Datlamo
        </h1>

        <p className="text-gray-400 text-xl md:text-2xl mb-12 leading-relaxed">
          Přesná tržní data pro vaši obchodní strategii
        </p>

        <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-12 mb-12">
          <div className="inline-block px-4 py-2 bg-[#047BEC]/20 border border-[#047BEC] rounded-full mb-6">
            <span className="text-[#047BEC] font-semibold">Připravujeme se</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Brzy pro vás otevřeme!
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Právě finalizujeme všechny administrativní detaily a vnitřní procesy, 
            abychom vám mohli poskytnout nejkvalitnější službu s bezpečným a 
            spolehlivým platebním systémem.
          </p>
        </div>

        <p className="text-gray-500 mb-8">
          Máte otázky? Napište nám na <a href="mailto:info@datlamo.cz" className="text-[#047BEC] hover:underline">info@datlamo.cz</a>
        </p>

        <p className="text-gray-600 text-sm">
          © 2026 Datlamo. Všechna práva vyhrazena.
        </p>
      </div>
    </div>
  )
}
