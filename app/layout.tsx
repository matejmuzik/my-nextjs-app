import './globals.css'
import type { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Datlamo – Data for smarter decisions',
  description: 'Structured market data and analytical outputs.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="cs">
      <body className="min-h-screen flex flex-col bg-[var(--page-bg)]">
        <Header />
        <main className="flex-1 container mx-auto px-4 pb-12 pt-16 bg-[var(--page-bg)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
