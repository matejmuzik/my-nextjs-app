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
            <h1 className="text-4xl md:text-[72px] leading-tight font-extrabold text-[#047BEC] mb-6">
              Rozhoduj podle čísel, ne pocitů.
            </h1>

            <p className="text-gray-300 mb-2 italic text-sm md:text-base">
              “Without data, you’re just another person with an opinion.”
              <br />
              – W. Edwards Deming
            </p>

            <p className="text-gray-400 mt-6 mb-8 text-base md:text-lg max-w-2xl">
              Přesná tržní data a přehledné dashboardy, které vám pomohou
              nastavit ceny, sledovat konkurenci a plánovat růst.
            </p>

            <Link
              href="/produkty"
              className="inline-block bg-[#047BEC] text-white px-6 py-3 rounded-lg font-semibold text-sm md:text-lg hover:bg-blue-600 transition-colors"
            >
              Prozkoumat trhy
            </Link>
          </div>

          <div className="hidden md:block md:col-span-5 relative">
            <div className="absolute right-[-170px] top-[-50px] w-[900px] h-[600px] opacity-100 select-none pointer-events-none">
              <img
                src="/obrazek2.svg"
                alt="hero graphic"
                className="w-full h-full object-contain mix-blend-lighten"
                style={{ filter: 'brightness(0.7)', opacity: 100 }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8">
            <h2 className="text-3xl md:text-[48px] leading-tight font-extrabold text-white mb-6 md:mb-8">
              Co je Datlamo?
            </h2>

            <p className="text-gray-300 text-base md:text-lg mb-6">
              Datlamo je platforma, která nabízí hotové tržní datasety a přehledné dashboardy.
            </p>

            <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed max-w-2xl">
              Datlamo je navrženo tak, aby i malé a střední podniky měly přístup k tržním datům, která běžně stojí tisíce až desetitisíce korun.
            </p>

            <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed max-w-2xl">
              Pomáhá firmám rychle pochopit situaci v odvětví, porovnat konkurenci a nastavit správné ceny bez nutnosti najímat drahé agentury.
            </p>

            <Link
              href="#ukazka-produktu"
              className="inline-block border border-[#047BEC] text-[#047BEC] px-6 py-3 rounded-lg font-semibold text-sm md:text-lg hover:bg-[#047BEC] hover:text-white transition-colors"
            >
              Chci ukázku
            </Link>
          </div>

          <div className="hidden md:block md:col-span-4"></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-32">
        <h2 className="text-3xl md:text-[48px] leading-tight font-extrabold text-white mb-12 md:mb-16">
          Každý tržní dataset obsahuje:
        </h2>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <div className="border border-gray-700 rounded-lg p-6 bg-gray-900/30 h-full transition-all duration-300 hover:border-[#047BEC] hover:bg-gray-900/50 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer flex flex-col">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 opacity-80">
                  <img src="/penízepng2.png" alt="Ceny" className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">Ceny produktů<br />a služeb</h3>
                  <p className="text-gray-400 text-lg">
                    Přesné cenové údaje pro snadné porovnání konkurence a nastavení správné cenotvorby.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4">
            <div className="border border-gray-700 rounded-lg p-6 bg-gray-900/30 h-full transition-all duration-300 hover:border-[#047BEC] hover:bg-gray-900/50 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer flex flex-col">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 opacity-80">
                  <img src="/domekpng.png" alt="Domek" className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">Strukturované<br />informace o podnicích</h3>
                  <p className="text-gray-400 text-lg">
                    Přehledné informace o podnicích - lokalita, typ provozu, nabídka služeb a další klíčové atributy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4">
            <div className="border border-gray-700 rounded-lg p-6 bg-gray-900/30 h-full transition-all duration-300 hover:border-[#047BEC] hover:bg-gray-900/50 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer flex flex-col">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 opacity-80">
                  <img src="/sloupecsvg.svg" alt="Sloupce" className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">Indexy (cena,reputace,<br /> Value for Money atd.)</h3>
                  <p className="text-gray-400 text-lg">
                    Standardizované metriky, které umožňují rychlé a férové srovnání podniků v celém trhu.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-2"></div>

          <div className="col-span-12 md:col-span-4">
            <div className="border border-gray-700 rounded-lg p-6 bg-gray-900/30 h-full transition-all duration-300 hover:border-[#047BEC] hover:bg-gray-900/50 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer flex flex-col">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 opacity-80">
                  <img src="/Starsvg.svg" alt="Hvězda" className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">Reputační data<br />od zákazníka</h3>
                  <p className="text-gray-400 text-lg">
                    Google rating, počet recenzí a indexy reputace, které ukazují, jak zákazníci podnik vnímají.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4">
            <div className="border border-gray-700 rounded-lg p-6 bg-gray-900/30 h-full transition-all duration-300 hover:border-[#047BEC] hover:bg-gray-900/50 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer flex flex-col">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 opacity-80">
                  <img src="/Vector.svg" alt="Tabulky" className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">Tabulky a metriky<br />pro analýzy</h3>
                  <p className="text-gray-400 text-lg">
                    Výstupy připravené pro Excel, BI nástroje i vlastní reporty bez nutnosti datových úprav.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-2"></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-32">
        <h2 className="text-[48px] leading-tight font-extrabold text-white mb-16">
          Pro koho je Datlamo:
        </h2>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6">
            <div className="border border-gray-700 rounded-lg p-6 bg-gray-900/30 h-full transition-all duration-300 hover:border-[#047BEC] hover:bg-gray-900/50 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 opacity-80">
                  <img src="/Shop.svg" alt="Shop" className="w-16 h-16 object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Majitelé a manažeři podniků</h3>
                  <p className="text-gray-400 text-base">
                    Poznejte svou konkurenci, cenovou hladinu a trendy ve svém odvětví. Získej podklady pro lepší rozhodování.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6">
            <div className="border border-gray-700 rounded-lg p-6 bg-gray-900/30 h-full transition-all duration-300 hover:border-[#047BEC] hover:bg-gray-900/50 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 opacity-80">
                  <img src="/Chart.svg" alt="Chart" className="w-16 h-16 object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Investoři a podnikatelé</h3>
                  <p className="text-gray-400 text-base">
                    Vyhodnoťte atraktivitu segmentu na základě reálných dat, ne pocitů. Najděte příležitosti dřív než ostatní.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6">
            <div className="border border-gray-700 rounded-lg p-6 bg-gray-900/30 h-full transition-all duration-300 hover:border-[#047BEC] hover:bg-gray-900/50 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 opacity-80">
                  <img src="/Ruce.svg" alt="Ruce" className="w-16 h-16 object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Konzultanti / agentury</h3>
                  <p className="text-gray-400 text-base">
                    Zrychlete analýzy a prezentace klientům pomocí připravených datasetů, indexů a dashboardů.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6">
            <div className="border border-gray-700 rounded-lg p-6 bg-gray-900/30 h-full transition-all duration-300 hover:border-[#047BEC] hover:bg-gray-900/50 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 opacity-80">
                  <img src="/Database.svg" alt="Database" className="w-16 h-16 object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Analytici / BI týmy</h3>
                  <p className="text-gray-400 text-base">
                    Stáhněte dataset a použijte ho v Excelu, Power BI, Lookeru či jiných nástrojích. Nebo rovnou využijte náš hotový dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<section className="hidden md:block max-w-7xl mx-auto px-6 py-32">
  <h2 className="text-[48px] leading-tight font-extrabold text-white mb-24">
    Jak Datlamo funguje:
  </h2>

  <div className="flex flex-col gap-0">

    {/* ================= STEP 1 (TEXT VPRAVO) ================= */}
    <div className="grid grid-cols-[1fr_128px_132px_128px_1fr] items-center max-w-[1200px] mx-auto">
      <div /> {/* levý text prázdný */}

      {/* LEVÁ SPOJKA */}
      <div />

      {/* KRUH */}
      <div className="flex justify-center">
        <svg width="132" height="132" viewBox="0 0 132 132" style={{ transform: 'rotate(-90deg)' }}>
          <circle cx="66" cy="66" r="57.5" fill="none" stroke="#3a4151" strokeWidth="17" />
          <circle cx="66" cy="66" r="57.5" fill="none" stroke="#047BEC" strokeWidth="17"
            strokeDasharray={`${57.5 * 2 * Math.PI * 0.2} ${57.5 * 2 * Math.PI}`}
            strokeLinecap="round" />
          <text x="66" y="66" textAnchor="middle" dominantBaseline="middle"
            fill="white" fontSize="48" fontWeight="600"
            style={{ transform: 'rotate(90deg)', transformOrigin: '66px 66px' }}>1</text>
        </svg>
      </div>

      {/* PRAVÁ SPOJKA */}
      <div className="flex items-center justify-center">
        <div className="h-1 flex-1 bg-white mx-4" />
      </div>

      {/* TEXT */}
      <div className="text-center">
        <img src="/Mapa.svg" alt="Mapa" className="w-16 h-16 mb-3 opacity-80 mx-auto" />
        <h3 className="text-3xl font-bold text-white mb-2">Vyberte trh</h3>
        <p className="text-gray-400 text-lg">
          Zvolte lokalitu nebo odvětví, které chcete analyzovat.
        </p>
      </div>
    </div>

    {/* ================= SVISLÁ SPOJNICE ================= */}
    <div className="grid grid-cols-[1fr_128px_132px_128px_1fr] max-w-[1200px] mx-auto">
      <div />
      <div />
      <div className="flex justify-center">
        <div className="w-2 h-32 bg-[#047BEC] opacity-80 my-2" />
      </div>
      <div />
      <div />
    </div>

    {/* ================= STEP 2 (TEXT VLEVO) ================= */}
    <div className="grid grid-cols-[1fr_128px_132px_128px_1fr] items-center max-w-[1200px] mx-auto">
      {/* TEXT */}
      <div className="text-center">
        <img src="/Basket.svg" alt="Basket" className="w-16 h-16 mb-3 opacity-80 mx-auto" />
        <h3 className="text-3xl font-bold text-white mb-2">Zvolte produkt</h3>
        <p className="text-gray-400 text-lg">
          Vyberte si dataset nebo dataset s interaktivním dashboardem.
        </p>
      </div>

      {/* LEVÁ SPOJKA */}
      <div className="flex items-center justify-center">
        <div className="h-1 flex-1 bg-white mx-4" />
      </div>

      {/* KRUH */}
      <div className="flex justify-center">
        <svg width="132" height="132" viewBox="0 0 132 132" style={{ transform: 'rotate(-90deg)' }}>
          <circle cx="66" cy="66" r="57.5" fill="none" stroke="#3a4151" strokeWidth="17" />
          <circle cx="66" cy="66" r="57.5" fill="none" stroke="#047BEC" strokeWidth="17"
            strokeDasharray={`${57.5 * 2 * Math.PI * 0.4} ${57.5 * 2 * Math.PI}`}
            strokeLinecap="round" />
          <text x="66" y="66" textAnchor="middle" dominantBaseline="middle"
            fill="white" fontSize="48" fontWeight="600"
            style={{ transform: 'rotate(90deg)', transformOrigin: '66px 66px' }}>2</text>
        </svg>
      </div>

      {/* PRAVÁ SPOJKA */}
      <div />

      <div />
    </div>

    {/* ================= SVISLÁ SPOJNICE ================= */}
    <div className="grid grid-cols-[1fr_128px_132px_128px_1fr] max-w-[1200px] mx-auto">
      <div />
      <div />
      <div className="flex justify-center">
        <div className="w-2 h-32 bg-[#047BEC] opacity-80 my-2" />
      </div>
      <div />
      <div />
    </div>

    {/* ================= STEP 3 (TEXT VPRAVO) ================= */}
    <div className="grid grid-cols-[1fr_128px_132px_128px_1fr] items-center max-w-[1200px] mx-auto">
      <div />
      <div />

      <div className="flex justify-center">
        <svg width="132" height="132" viewBox="0 0 132 132" style={{ transform: 'rotate(-90deg)' }}>
          <circle cx="66" cy="66" r="57.5" fill="none" stroke="#3a4151" strokeWidth="17" />
          <circle cx="66" cy="66" r="57.5" fill="none" stroke="#047BEC" strokeWidth="17"
            strokeDasharray={`${57.5 * 2 * Math.PI * 0.6} ${57.5 * 2 * Math.PI}`}
            strokeLinecap="round" />
          <text x="66" y="66" textAnchor="middle" dominantBaseline="middle"
            fill="white" fontSize="48" fontWeight="600"
            style={{ transform: 'rotate(90deg)', transformOrigin: '66px 66px' }}>3</text>
        </svg>
      </div>

      <div className="flex items-center justify-center">
        <div className="h-1 flex-1 bg-white mx-4" />
      </div>

      <div className="text-center">
        <img src="/Card.svg" alt="Card" className="w-16 h-16 mb-3 opacity-80 mx-auto" />
        <h3 className="text-3xl font-bold text-white mb-2">Zaplaťte jednorázově</h3>
        <p className="text-gray-400 text-lg">
          Žádné předplatné. Po úhradě získáte okamžitý přístup.
        </p>
      </div>
    </div>

    {/* ================= SVISLÁ SPOJNICE ================= */}
    <div className="grid grid-cols-[1fr_128px_132px_128px_1fr] max-w-[1200px] mx-auto">
      <div />
      <div />
      <div className="flex justify-center">
        <div className="w-2 h-32 bg-[#047BEC] opacity-80 my-2" />
      </div>
      <div />
      <div />
    </div>

    {/* ================= STEP 4 (TEXT VLEVO) ================= */}
    <div className="grid grid-cols-[1fr_128px_132px_128px_1fr] items-center max-w-[1200px] mx-auto">
      <div className="text-center">
        <img src="/Download.svg" alt="Download" className="w-16 h-16 mb-3 opacity-80 mx-auto" />
        <h3 className="text-3xl font-bold text-white mb-2">Stáhněte ZIP balíček</h3>
        <p className="text-gray-400 text-lg">
          ZIP obsahuje XLSX, PDF metodiku a případně Power BI dashboard.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <div className="h-1 flex-1 bg-white mx-4" />
      </div>

      <div className="flex justify-center">
        <svg width="132" height="132" viewBox="0 0 132 132" style={{ transform: 'rotate(-90deg)' }}>
          <circle cx="66" cy="66" r="57.5" fill="none" stroke="#3a4151" strokeWidth="17" />
          <circle cx="66" cy="66" r="57.5" fill="none" stroke="#047BEC" strokeWidth="17"
            strokeDasharray={`${57.5 * 2 * Math.PI * 0.8} ${57.5 * 2 * Math.PI}`}
            strokeLinecap="round" />
          <text x="66" y="66" textAnchor="middle" dominantBaseline="middle"
            fill="white" fontSize="48" fontWeight="600"
            style={{ transform: 'rotate(90deg)', transformOrigin: '66px 66px' }}>4</text>
        </svg>
      </div>

      <div />

      <div />
    </div>

    {/* ================= SVISLÁ SPOJNICE ================= */}
    <div className="grid grid-cols-[1fr_128px_132px_128px_1fr] max-w-[1200px] mx-auto">
      <div />
      <div />
      <div className="flex justify-center">
        <div className="w-2 h-32 bg-[#047BEC] opacity-80 my-2" />
      </div>
      <div />
      <div />
    </div>

    {/* ================= STEP 5 (TEXT VPRAVO) ================= */}
    <div className="grid grid-cols-[1fr_128px_132px_128px_1fr] items-center max-w-[1200px] mx-auto">
      <div />
      <div />

      <div className="flex justify-center">
        <svg width="132" height="132" viewBox="0 0 132 132" style={{ transform: 'rotate(-90deg)' }}>
          <circle cx="66" cy="66" r="57.5" fill="none" stroke="#3a4151" strokeWidth="17" />
          <circle cx="66" cy="66" r="57.5" fill="none" stroke="#047BEC" strokeWidth="17"
            strokeDasharray={`${57.5 * 2 * Math.PI} ${57.5 * 2 * Math.PI}`}
            strokeLinecap="round" />
          <text x="66" y="66" textAnchor="middle" dominantBaseline="middle"
            fill="white" fontSize="48" fontWeight="600"
            style={{ transform: 'rotate(90deg)', transformOrigin: '66px 66px' }}>5</text>
        </svg>
      </div>

      <div className="flex items-center justify-center">
        <div className="h-1 flex-1 bg-white mx-4" />
      </div>

      <div className="text-center">
        <img src="/Done.svg" alt="Done" className="w-16 h-16 mb-3 opacity-80 mx-auto" />
        <h3 className="text-3xl font-bold text-white mb-1">
          Získejte okamžitý přehled<br />o trhu
        </h3>
        <p className="text-gray-400 text-lg">
          Filtry, mapa, grafy a insighty vám ihned ukážou situaci v celém trhu.
        </p>
      </div>
    </div>

  </div>
</section>

<section id="ukazka-produktu" className="max-w-7xl mx-auto px-6 py-32">
  <div className="mb-8">
    <h2 className="text-2xl md:text-[40px] leading-tight font-extrabold text-white mb-4 whitespace-nowrap">
      Ukázka produktu - Fitness Ostrava 2025:
    </h2>

    <p className="text-gray-400 text-base md:text-lg mb-4 leading-relaxed">
      Takto vypadá jeden z přehledů dostupných v dashboardu.
    </p>

    <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed">
      Filtry, insighty, mapa, grafy i metriky umožňují rychle porozumět trhu bez nutnosti analyzovat data ručně.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
      <a
        href="/datasets/Dashboard%20pro%20uk%C3%A1zku.pbix"
        download="Dashboard-pro-ukázku.pbix"
        className="flex-1 border border-[#047BEC] text-[#047BEC] px-6 py-2 rounded-lg font-semibold text-sm hover:bg-[#047BEC] hover:text-white transition-colors text-center"
      >
        Stáhnout dashboard
      </a>
      <a
        href="/datasets/Dataset%20ukázka.xlsx"
        download="fitness-brno-sample.xlsx"
        className="flex-1 border border-gray-600 text-gray-400 px-6 py-2 rounded-lg font-semibold text-sm hover:text-white hover:border-gray-500 transition-colors text-center"
      >
        Stáhnout ukázkový dataset (Brno)
      </a>
    </div>
  </div>

  <div className="w-full">
    <img src="/Ukazka.svg" alt="Dashboard preview Fitness Ostrava" className="w-full" />
  </div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32">
  <div className="text-center">
    <h2 className="text-3xl md:text-[48px] leading-tight font-extrabold text-white mb-12">
      Získej okamžitý přehled o svém trhu.
    </h2>

    <Link
      href="/produkty"
      className="inline-block bg-[#047BEC] text-white px-6 py-3 rounded-lg font-semibold text-sm md:text-lg hover:bg-blue-600 transition-colors mb-16"
    >
      Prozkoumat trhy
    </Link>

    <p className="text-gray-400 text-base md:text-lg mb-8">
      Máte otázku nebo chcete poradit?
    </p>

    <Link
      href="/kontakt"
      className="inline-block border border-gray-600 text-gray-200 px-4 py-2 rounded hover:bg-gray-800"
    >
      Kontaktujte nás zde.
    </Link>
  </div>
</section>

    </div>
  )
}

