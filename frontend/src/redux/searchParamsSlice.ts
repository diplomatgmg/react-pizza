import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type OrderingFields, type SearchParams } from '../types'

const initialState: SearchParams = {
  page: 1,
  category: 'все',
  ordering: ''
}

const searchParamsSlice = createSlice({
  name: 'searchParams',
  initialState,
  reducers: {
    setPage (state, action: PayloadAction<number>) {
      state.page = action.payload
    },
    setCategory (state, action: PayloadAction<string>) {
      state.category = action.payload
    },
    setOrdering (state, action: PayloadAction<OrderingFields>) {
      state.ordering = action.payload
    }
  }
})

export const {
  setPage,
  setCategory,
  setOrdering
} = searchParamsSlice.actions

export default searchParamsSlice.reducer
export { type SearchParams }
