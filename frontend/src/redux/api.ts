import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type Category, type LoginResponse, type PizzaResponse, type SearchParams } from '../types'
import { type RootState } from './store'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.tokens?.access

      if (token !== null) {
        headers.set('Authorization', `Bearer ${token}`)
      }

      return headers
    }
  }),
  endpoints: (build) => ({
    getPizzas: build.query<PizzaResponse, SearchParams>({
      query: (params) => ({
        url: 'pizzas/',
        params
      }),
      keepUnusedDataFor: 1
    }),
    getCategories: build.query<Category[], unknown>({
      query: () => 'categories/'
    }),
    login: build.mutation<LoginResponse, { email: string, password: string }>({
      query: (credentials) => ({
        url: 'login/',
        method: 'POST',
        body: credentials
      })
    }),
    logout: build.mutation<unknown, unknown>({
      query: (credentials) => ({
        url: 'logout/',
        method: 'POST',
        body: credentials
      })
    })
  })
})

export const {
  useGetPizzasQuery,
  useGetCategoriesQuery,
  useLoginMutation,
  useLogoutMutation
} = api

export default api
