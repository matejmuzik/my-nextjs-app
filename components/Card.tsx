import Link from 'next/link'

type CardProps = {
  title: string
  description: string
  price?: string
  href?: string
}

export default function Card({ title, description, price, href }: CardProps) {
  return (
    <article className="border rounded-lg p-6 flex flex-col justify-between text-center">
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted mb-4">{description}</p>
      </div>
      <div className="flex items-center justify-center gap-4 mt-4">
        <div className="text-xl font-semibold text-primary">{price}</div>
        {href ? (
          <Link href={href} className="text-sm bg-accent text-white px-3 py-2 rounded">Koupit</Link>
        ) : (
          <span className="text-sm text-muted">Bez nákupu</span>
        )}
      </div>
    </article>
  )
}
