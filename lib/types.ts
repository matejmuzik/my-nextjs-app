export type ProductType = 'dataset' | 'bundle'
export type Market = 'praha' | 'brno' | 'ostrava'

export interface OrderRequest {
  email: string
  product: ProductType
  market: Market
}

export interface Order {
  id: string
  email: string
  product: ProductType
  market: Market
  confirmationCode: string
  createdAt: Date
  status: 'pending' | 'paid' | 'completed'
}

export interface OrderResponse {
  success: boolean
  message: string
  order?: Order
  error?: string
}
