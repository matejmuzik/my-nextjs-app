import Link from 'next/link'

export default function ProduktyPage() {
  const products = [
    {
      id: 1,
      title: 'Fitness – Praha 2025',
      description: 'Kompletní přehled fitness segmentu v Praze pro 250+ provozoven - ceny, služby, reputace a analytické indexy.',
      price: 'Od 1 490 Kč',
      tag: 'Dostupné',
      tagColor: 'bg-[#047BEC]',
      icon: '🏋️',
      button: 'Zobrazit produkt',
      href: '/produkty/fitness-praha-2025'
    },
    {
      id: 2,
      title: 'Fitness – Brno 2025',
      description: 'Kompletní přehled fitness segmentu v Brně pro 100+ provozoven - ceny, služby, reputace a analytické indexy.',
      price: 'Od 990 Kč',
      tag: 'Dostupné',
      tagColor: 'bg-[#047BEC]',
      icon: '🏋️',
      button: 'Zobrazit produkt',
      href: '/produkty/fitness-brno-2025'
    },
    {
      id: 3,
      title: 'Fitness – Ostrava 2025',
      description: 'Kompletní přehled fitness segmentu v Ostravě pro 60+ provozoven - ceny, služby, reputace a analytické indexy.',
      price: 'Od 690 Kč',
      tag: 'Dostupné',
      tagColor: 'bg-[#047BEC]',
      icon: '🏋️',
      button: 'Zobrazit produkt',
      href: '/produkty/fitness-ostrava-2025'
    },
    {
      id: 4,
      title: 'Kadeřnictví',
      description: 'Data o cenách, lokalitě, službách a reputaci kadeřnických služeb.',
      tag: 'Brzy',
      tagColor: 'bg-yellow-700',
      icon: '✂️',
      button: 'Upozornit mě',
      href: '/notify'
    },
    {
      id: 5,
      title: 'Salony na nehty',
      description: 'Přehled cen, služeb a reputace v segmentu salon na nehty.',
      tag: 'Brzy',
      tagColor: 'bg-yellow-700',
      icon: '💅',
      button: 'Upozornit mě',
      href: '/notify'
    },
    {
      id: 6,
      title: 'Autopůjčovny',
      description: 'Připravujeme strukturovaný dataset třídů autopůjčoven: ceny pronájmu, typy vozů, podmínky a reputace.',
      tag: 'Brzy',
      tagColor: 'bg-yellow-700',
      icon: '🚗',
      button: 'Upozornit mě',
      href: '/notify'
    }
  ]

  return (
    <div className="bg-[var(--page-bg)] text-gray-100 overflow-hidden">
      <section className="max-w-7xl mx-auto px-6 py-32 hero-section">
        <h1 className="text-4xl md:text-[72px] leading-tight font-extrabold text-white mb-6">
          Produkty
        </h1>

        <div className="max-w-2xl">
          <p className="text-gray-300 text-lg md:text-xl mb-12 leading-relaxed">
            Vyber trh, který tě zajímá. Každý trh obsahuje strukturovaný dataset a <span className="text-white font-bold">volitelný dashboard</span>.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors">
              <div
                className={`relative h-48 flex items-center justify-center overflow-hidden ${
                  product.id <= 3 || product.id === 4 || product.id === 5 || product.id === 6 ? 'bg-cover bg-center' : 'bg-gradient-to-br from-gray-800 to-gray-900'
                }`}
                style={
                  product.id <= 3
                    ? { backgroundImage: 'url(/images/lift.webp)' }
                    : product.id === 4
                    ? { backgroundImage: 'url(/images/hairsalon.webp)' }
                    : product.id === 5
                    ? { backgroundImage: 'url(/images/nails.webp)' }
                    : product.id === 6
                    ? { backgroundImage: 'url(/images/car.webp)' }
                    : {}
                }
              >
                {(product.id <= 3 || product.id === 4 || product.id === 5 || product.id === 6) && (
                  <div className="absolute inset-0 bg-black/40"></div>
                )}
                <span className={`${product.tagColor} text-white text-xs font-semibold px-3 py-1 rounded absolute top-4 left-4 z-10`}>
                  {product.tag}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{product.title}</h3>
                {product.price && (
                  <p className="text-[#047BEC] text-sm font-semibold mb-2">{product.price}</p>
                )}
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{product.description}</p>

                <Link
                  href={product.href}
                  className={`block text-center py-3 px-4 rounded-lg font-semibold text-sm transition-colors ${
                    product.tag === 'Dostupné'
                      ? 'bg-[#047BEC] text-white hover:bg-blue-600'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {product.button}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center">
          <h2 className="text-3xl md:text-[48px] leading-tight font-extrabold text-white mb-12">
            Chcete vědět, když přidáme další trhy?
          </h2>

          <Link
            href="/notify"
            className="inline-block border border-[#047BEC] text-[#047BEC] px-6 py-3 rounded-lg font-semibold text-sm md:text-lg hover:bg-[#047BEC] hover:text-white transition-colors mb-16"
          >
            Upozornit mě
          </Link>

          <p className="text-gray-400 text-base md:text-lg mb-8">
            Máte nápad na další trh? Dejte nám vědět
          </p>

          <Link
            href="/kontakt"
            className="inline-block border border-gray-600 text-gray-200 px-6 py-3 rounded-lg font-semibold text-sm md:text-lg hover:bg-gray-800 transition-colors"
          >
            Kontaktujte nás zde
          </Link>
        </div>
      </section>
    </div>
  )
}
