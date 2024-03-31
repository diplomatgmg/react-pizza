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
  name: string
}

export type { OrderingFields, SearchParams }
