import crypto from 'crypto'

export function generateConfirmationCode(): string {
  return crypto.randomBytes(4).toString('hex').toUpperCase()
}

export function generateOrderId(): string {
  return `ORD-${Date.now()}-${crypto.randomBytes(3).toString('hex').toUpperCase()}`
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function getPriceForProduct(product: string, market: string): number {
  const prices: Record<string, Record<string, number>> = {
    praha: { dataset: 1490, bundle: 2490 },
    brno: { dataset: 990, bundle: 1990 },
    ostrava: { dataset: 690, bundle: 1690 },
  }
  return prices[market]?.[product] || 0
}

export function getProductName(market: string, product: string): string {
  const names: Record<string, string> = {
    praha: 'Fitness Praha 2025',
    brno: 'Fitness Brno 2025',
    ostrava: 'Fitness Ostrava 2025',
  }
  const marketName = names[market] || market
  const productName = product === 'dataset' ? 'Dataset' : 'Dataset + Dashboard'
  return `${marketName} - ${productName}`
}
