import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface SearchParams {
  page: number
  category: string
}

const initialState: SearchParams = {
  page: 1,
  category: 'все'
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
    }
  }
})

export const {
  setPage,
  setCategory
} = searchParamsSlice.actions

export default searchParamsSlice.reducer
export { type SearchParams }
