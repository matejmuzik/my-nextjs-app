"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './header.css'

const NAV = [
  { label: 'Domů', href: '/' },
  { label: 'O nás', href: '/o-nas' },
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'Produkty', href: '/produkty' },
]

export default function Header(): JSX.Element {
  const pathname = usePathname() || '/'

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--page-bg)] border-b border-blue-500/50 shadow-[0_6px_20px_rgba(4,123,236,0.12)]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between bg-[var(--page-bg)]">
        <Link href="/" className="flex items-center gap-3">
           <img src="/Brand-logo.svg" alt="Datlamo" className="h-12 w-auto" />
        </Link>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-6">
            {NAV.map((item) => {
              const active = isActive(item.href)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={`text-sm relative transition-colors duration-300 ${
                      active
                        ? 'text-white'
                        : item.href === '/produkty'
                        ? 'text-[#047BEC] hover:text-white'
                        : 'text-gray-300 hover:text-white'
                    } ${active ? 'nav-link-active' : 'nav-link'}`}
                  >
                    {item.label}
                    {active && <span className="nav-underline"></span>}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
