import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type Pizza } from '../types'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api'
  }),
  endpoints: (build) => ({
    getPizzas: build.query<Pizza[], unknown>({
      query: () => 'pizzas/'
    })
  })
})

export const {
  useGetPizzasQuery
} = api

export default api
