import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type LoginResponse } from '../types'

interface AuthParams extends LoginResponse {
  isAuthenticated: boolean
}

const initialState: AuthParams = {
  isAuthenticated: false,
  email: '',
  tokens: {
    access: '',
    refresh: ''
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginSuccess (state, action: PayloadAction<LoginResponse>) {
      const { email, tokens } = action.payload
      state.email = email
      state.tokens = tokens
      state.isAuthenticated = true
    },
    setLogoutSuccess (state) {
      state.email = ''
      state.tokens = {
        access: '',
        refresh: ''
      }
      state.isAuthenticated = false
    }
  }
})

export const {
  setLoginSuccess,
  setLogoutSuccess
} = authSlice.actions

export default authSlice.reducer
