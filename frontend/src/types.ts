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

interface Category {
  id: number
  name: string
}

type OrderingFields =
  | ''
  | 'name'
  | '-name'
  | 'price'
  | '-price'

interface SearchParams {
  page: number
  category: string
  ordering: OrderingFields
}

export type { Pizza, PizzaResponse, Category, OrderingFields, SearchParams }
