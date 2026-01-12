import '../globals.css'

export const metadata = {
  title: 'Datlamo – Brzy pro vás otevřeme',
  description: 'Připravujeme se. Brzy budeme online.',
}

export default function ComingSoonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className="bg-[#0B0C10]">
        {children}
      </body>
    </html>
  )
}
