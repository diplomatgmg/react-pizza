import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface SearchParams {
  page: number
}

const initialState: SearchParams = {
  page: 1
}

const searchParamsSlice = createSlice({
  name: 'searchParams',
  initialState,
  reducers: {
    setPage (state, action: PayloadAction<number>) {
      state.page = action.payload
    }
  }
})

export const {
  setPage
} = searchParamsSlice.actions

export default searchParamsSlice.reducer
export { type SearchParams }
