interface Ingredient {
  name: string
}

interface Pizza {
  id: number
  name: string
  price: number
  ingredients: Ingredient[]
}

export type { Pizza }
