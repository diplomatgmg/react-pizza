import { type Pizza } from './types'

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

export type { PizzaResponse, LoginResponse, RegisterResponse }
