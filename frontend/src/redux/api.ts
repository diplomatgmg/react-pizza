import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type RootState } from './store'
import { type CartResponse, type LoginResponse, type PizzaResponse, type RegisterResponse } from '../@types/responses'
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
  tagTypes: ['Cart'],
  endpoints: (build) => ({
    getPizzas: build.query<PizzaResponse, SearchParams>({
      query: (params) => ({
        url: 'pizzas/',
        params
      })
    }),
    getCategories: build.query<Category[], unknown>({
      query: () => 'categories/'
    }),
    register: build.mutation<RegisterResponse, { email: string, password: string, confirm_password: string }>({ // TODO
      query: (credentials) => ({
        url: 'register/',
        method: 'POST',
        body: credentials
      })
    }),
    login: build.mutation<LoginResponse, { email: string, password: string }>({ // TODO
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
      }),
      invalidatesTags: ['Cart']
    }),
    getCart: build.query<CartResponse, unknown>({
      query: () => 'cart/',
      providesTags: ['Cart']
    }),
    addCartItem: build.mutation<unknown, { pizza: number }>({
      query: (body) => ({
        url: 'cart/',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Cart']
    }),
    decreaseCartItem: build.mutation<unknown, { pizza: number }>({
      query: (body) => ({
        url: 'cart/',
        method: 'PATCH',
        body
      }),
      invalidatesTags: ['Cart']
    }),
    deleteCartItem: build.mutation({
      query: (body) => ({
        url: 'cart/',
        method: 'DELETE',
        body
      }),
      invalidatesTags: ['Cart']
    })

  })
})

export const {
  useGetPizzasQuery,
  useGetCategoriesQuery,
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetCartQuery,
  useAddCartItemMutation,
  useDecreaseCartItemMutation,
  useDeleteCartItemMutation
} = api

export default api
