import './globals.css'
import type { ReactNode } from 'react'
import ClientLayout from '../components/ClientLayout'

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
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
