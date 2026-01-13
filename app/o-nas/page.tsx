import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="bg-[var(--page-bg)] text-gray-100 overflow-hidden">
      <section className="hero-section max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-[72px] leading-tight font-extrabold text-white mb-6">
            O Datlamo
          </h1>

          <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
            Datlamo zpřístupňuje tržní data i malým a středním firmám. Přinášíme přehled trhu, ceny, reputaci a srovnání konkurence - bez drahých agentur.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md">
            <Link
              href="/produkty"
              className="flex-1 bg-[#047BEC] text-white px-6 py-3 rounded-lg font-semibold text-sm md:text-lg hover:bg-blue-600 transition-colors text-center"
            >
              Prozkoumat trhy
            </Link>
            <Link
              href="/kontakt"
              className="flex-1 border border-gray-600 text-gray-200 px-6 py-3 rounded-lg font-semibold text-sm md:text-lg hover:bg-gray-800 transition-colors text-center"
            >
              Kontaktujte nás zde
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 w-full md:max-w-[66%]">
          <div>
            <div className="border border-gray-700 rounded-lg p-10 bg-gray-900/30 h-full transition-all duration-300 hover:border-[#047BEC] hover:bg-gray-900/50 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer">
              <div className="flex gap-6">
                <div className="text-5xl font-extrabold text-[#047BEC] flex-shrink-0">1.</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight">Stovky až tisíce podniků napřič trhy</h3>
                  <p className="text-gray-400 text-lg">
                    Každý dataset vychází z reálných podniků a veřejných dat.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="border border-gray-700 rounded-lg p-10 bg-gray-900/30 h-full transition-all duration-300 hover:border-[#047BEC] hover:bg-gray-900/50 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer">
              <div className="flex gap-6">
                <div className="text-5xl font-extrabold text-[#047BEC] flex-shrink-0">2.</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight">Jednotná metodika napřič segmenty</h3>
                  <p className="text-gray-400 text-lg">
                    Stejný datový model, stejné indexy, stejná logika porovnání.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="border border-gray-700 rounded-lg p-10 bg-gray-900/30 h-full transition-all duration-300 hover:border-[#047BEC] hover:bg-gray-900/50 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer">
              <div className="flex gap-6">
                <div className="text-5xl font-extrabold text-[#047BEC] flex-shrink-0">3.</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight">Standardizované indexy</h3>
                  <p className="text-gray-400 text-lg">
                    Cena, reputace, Trust a Value for Money - srozumitelné a porovnatelné.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="border border-gray-700 rounded-lg p-10 bg-gray-900/30 h-full transition-all duration-300 hover:border-[#047BEC] hover:bg-gray-900/50 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer">
              <div className="flex gap-6">
                <div className="text-5xl font-extrabold text-[#047BEC] flex-shrink-0">4.</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight">Transparentnost před nákupem</h3>
                  <p className="text-gray-400 text-lg">
                    Ukázková data a metodika před nákupem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-32">
        <h2 className="text-3xl md:text-[48px] leading-tight font-extrabold text-white mb-4 md:mb-8">
          Jak pracujeme s daty
        </h2>

        <p className="text-gray-400 text-base md:text-lg mb-12 leading-relaxed max-w-2xl">
          Stejný postup napřič trhy, konzistentní výstupy, srozumitelná metodika.
        </p>

        <div className="grid grid-cols-12 gap-6 md:gap-16">
          <div className="col-span-12 md:col-span-8">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-6">
                <div className="border border-gray-700 rounded-lg p-10 bg-gray-900/30 h-full transition-all duration-300 hover:border-[#047BEC] hover:bg-gray-900/50 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer">
                  <div className="flex gap-6">
                    <div className="text-5xl font-extrabold text-[#047BEC] flex-shrink-0">1.</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3 leading-tight">Sběr dat</h3>
                      <p className="text-gray-400 text-lg">
                        Veřejné zdroje, ruční údaje a validace, deduplikace.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-6">
                <div className="border border-gray-700 rounded-lg p-10 bg-gray-900/30 h-full transition-all duration-300 hover:border-[#047BEC] hover:bg-gray-900/50 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer">
                  <div className="flex gap-6">
                    <div className="text-5xl font-extrabold text-[#047BEC] flex-shrink-0">2.</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3 leading-tight">Strukturování</h3>
                      <p className="text-gray-400 text-lg">
                        Normalizace cen, typologie podniků, sjednocení polí.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-6">
                <div className="border border-gray-700 rounded-lg p-10 bg-gray-900/30 h-full transition-all duration-300 hover:border-[#047BEC] hover:bg-gray-900/50 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer">
                  <div className="flex gap-6">
                    <div className="text-5xl font-extrabold text-[#047BEC] flex-shrink-0">3.</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3 leading-tight">Výpočet indexů</h3>
                      <p className="text-gray-400 text-lg">
                        Cena, reputace, Trust a Value for Money.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-6">
                <div className="border border-gray-700 rounded-lg p-10 bg-gray-900/30 h-full transition-all duration-300 hover:border-[#047BEC] hover:bg-gray-900/50 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer">
                  <div className="flex gap-6">
                    <div className="text-5xl font-extrabold text-[#047BEC] flex-shrink-0">4.</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3 leading-tight">Výstup</h3>
                      <p className="text-gray-400 text-lg">
                        Dataset, dashboard a PDF metodika.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4">
            <div className="border-2 border-[#047BEC] rounded-lg p-6 bg-gray-900/30 transition-all duration-300 hover:bg-gray-900/50 hover:shadow-lg hover:shadow-blue-500/10">
              <h3 className="text-xl font-bold text-white mb-3">Mise</h3>
              <p className="text-gray-300 text-base font-semibold mb-3">
                Zpřístupnit tržní data pro všechny.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Strukturovaný pohled na trhy napřič obory, firmami a velikostí podniků.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-32">
        <h2 className="text-3xl md:text-[48px] leading-tight font-extrabold text-white mb-4 md:mb-8">
          Milníky projektu
        </h2>

        <p className="text-gray-400 text-base md:text-lg mb-16 leading-relaxed max-w-2xl">
          Postupný vývoj platformy a rozšiřování do dalších trhů.
        </p>

        <div className="flex gap-0">
          <div className="flex flex-col">
            <div className="text-4xl font-bold text-[#047BEC] py-6 pr-8 min-h-[100px] flex items-center">2025</div>
            <div className="text-4xl font-bold text-[#047BEC] py-6 pr-8 min-h-[100px] flex items-center">2026 Q1</div>
            <div className="text-4xl font-bold text-[#047BEC] py-6 pr-8 min-h-[100px] flex items-center">2026 Q2</div>
            <div className="text-4xl font-bold text-[#047BEC] py-6 pr-8 min-h-[100px] flex items-center">2026 Q3</div>
            <div className="text-4xl font-bold text-[#047BEC] py-6 pr-8 min-h-[100px] flex items-center">2026 - ..</div>
          </div>

          <div className="border-l-2 border-gray-600 pl-8">
            <div className="py-6 min-h-[100px] flex items-center">
              <p className="text-gray-300 text-lg">
                Návrh datového modelu a výpočet indexů.
              </p>
            </div>
            <div className="py-6 min-h-[100px] flex items-center">
              <p className="text-gray-300 text-lg">
                Spuštění webu Datlamo a první pilotní trhy.
              </p>
            </div>
            <div className="py-6 min-h-[100px] flex items-center">
              <p className="text-gray-300 text-lg">
                Rozšíření o další místa a datasety
              </p>
            </div>
            <div className="py-6 min-h-[100px] flex items-center">
              <p className="text-gray-300 text-lg">
                Nové segmenty a rozšířené analytické výstupy.
              </p>
            </div>
            <div className="py-6 min-h-[100px] flex items-center">
              <p className="text-gray-300 text-lg">
                Škálování platformy
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center">
          <h2 className="text-3xl md:text-[48px] leading-tight font-extrabold text-white mb-12">
            Chcete vidět Datlamo v praxi?
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
