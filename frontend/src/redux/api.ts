import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type Category, type PizzaResponse, type SearchParams } from '../types'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api'
  }),
  endpoints: (build) => ({
    getPizzas: build.query<PizzaResponse, SearchParams>({
      query: (params) => ({
        url: 'pizzas/',
        params
      })
    }),
    getCategories: build.query<Category[], unknown>({
      query: () => 'categories/'
    })
  })
})

export const {
  useGetPizzasQuery,
  useGetCategoriesQuery
} = api

export default api
