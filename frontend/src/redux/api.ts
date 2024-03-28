import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type PizzaResponse } from '../types'
import { type SearchParams } from './searchParamsSlice'

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
    })
  })
})

export const {
  useGetPizzasQuery
} = api

export default api
