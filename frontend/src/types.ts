interface Ingredient {
  name: string
}

interface Pizza {
  id: number
  name: string
  price: number
  ingredients: Ingredient[]
  image_url: string
}

interface PizzaResponse {
  results: Pizza[]
  total_pages: number
}

export type { Pizza, PizzaResponse }
