import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type RootState } from './store'
import { type LoginResponse, type PizzaResponse, type RegisterResponse } from '../@types/responses'
import { type SearchParams } from '../@types/searchParams'
import { type Category } from '../@types/types'

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
    register: build.mutation<RegisterResponse, { email: string, password: string, confirm_password: string }>({
      query: (credentials) => ({
        url: 'register/',
        method: 'POST',
        body: credentials
      })
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
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation
} = api

export default api
