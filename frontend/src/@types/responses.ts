import { type CartItem, type Pizza } from './types'

interface PizzaResponse {
  results: Pizza[]
  total_pages: number
}

interface LoginResponse {
  email: string
  tokens: {
    refresh: string
    access: string
  }
}

interface RegisterResponse {
  email: string
}

interface CartResponse {
  items: CartItem[]
}

export type { PizzaResponse, LoginResponse, RegisterResponse, CartResponse }
