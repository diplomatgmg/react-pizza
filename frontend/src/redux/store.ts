import { configureStore } from '@reduxjs/toolkit'
import api from './api'
import searchParamsReducer from './searchParamsSlice'

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    searchParams: searchParamsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
