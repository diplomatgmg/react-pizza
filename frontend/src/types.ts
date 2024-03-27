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

export type { Pizza }
