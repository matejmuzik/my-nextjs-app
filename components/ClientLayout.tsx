'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isComingSoon = pathname === '/coming-soon'

  return (
    <>
      {!isComingSoon && <Header />}
      <main className={isComingSoon ? '' : 'flex-1 container mx-auto px-4 pb-12 pt-16 bg-[var(--page-bg)]'}>
        {children}
      </main>
      {!isComingSoon && <Footer />}
    </>
  )
}
