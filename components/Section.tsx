import { ReactNode } from 'react'

export default function Section({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
      <div className="bg-white rounded shadow-sm p-6">{children}</div>
    </section>
  )
}
