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

interface Category {
  id: number
  name: string
}

interface CartItem {
  id: number
  pizza: Pizza
  quantity: number
}

export type { Ingredient, Pizza, Category, CartItem }
