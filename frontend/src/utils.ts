import { type OrderingFields } from './@types/searchParams'

const translateOrderingName = (ordering: OrderingFields): string => {
  switch (ordering) {
    case 'name':
      return 'имени ↓'
    case '-name':
      return 'имени ↑'
    case 'price':
      return 'цене ↓'
    case '-price':
      return 'цене ↑'
    default:
      return 'умолчанию'
  }
}

export { translateOrderingName }
