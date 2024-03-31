import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type OrderingFields, type SearchParams } from '../@types/searchParams'

const initialState: SearchParams = {
  page: 1,
  category: 'все',
  ordering: '',
  name: ''
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
    },
    setName (state, action: PayloadAction<string>) {
      state.name = action.payload
    }
  }
})

export const {
  setPage,
  setCategory,
  setOrdering,
  setName
} = searchParamsSlice.actions

export default searchParamsSlice.reducer
export { type SearchParams }
