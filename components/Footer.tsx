import Link from 'next/link'

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-[var(--page-bg)] text-gray-300 text-sm border-t border-gray-800">
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start justify-between gap-8 bg-[var(--page-bg)]">
          <div className="flex flex-col items-start text-left w-full md:w-auto">
            <Link href="/" className="flex items-center gap-3">
              <img src="/Brand-logo.svg" alt="Datlamo" className="h-16 w-auto" />
            </Link>
            <p className="mt-3 text-gray-400 text-sm">Přesná tržní data pro rychlá a informovaná rozhodnutí.</p>
          </div>

          <div className="hidden md:block md:absolute left-1/2 top-10 transform -translate-x-1/2 w-48">
            <div className="text-left">
              <h4 className="font-semibold text-white mb-3">Rychlé odkazy</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white">Domů</Link>
                </li>
                <li>
                  <Link href="/produkty" className="hover:text-white">Produkty</Link>
                </li>
                <li>
                  <Link href="/o-nas" className="hover:text-white">O nás</Link>
                </li>
                <li>
                  <Link href="/kontakt" className="hover:text-white">Kontakt</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-start text-left w-full md:w-auto">
            <h4 className="font-semibold text-white mb-3">Kontakt</h4>
            <p className="text-gray-400">info@datlamo.cz</p>
            <div className="mt-4">
              <Link href="/kontakt" className="inline-block border border-gray-600 text-gray-200 px-4 py-2 rounded hover:bg-gray-800">Kontaktujte nás zde.</Link>
            </div>
          </div>
        </div>

        {/* Center column fixed to viewport center - mobile version */}
        <div className="md:hidden max-w-7xl mx-auto px-6 py-6 border-t border-gray-800">
          <div className="text-left">
            <h4 className="font-semibold text-white mb-3">Rychlé odkazy</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white">Domů</Link>
              </li>
              <li>
                <Link href="/produkty" className="hover:text-white">Produkty</Link>
              </li>
              <li>
                <Link href="/o-nas" className="hover:text-white">O nás</Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-white">Kontakt</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 text-center text-xs text-gray-500 border-t border-gray-800">
        © 2025 Datlamo. Všechna práva vyhrazena.
      </div>
    </footer>
  )
}
