import { createSlice } from '@reduxjs/toolkit'
import { IInitialState } from './user.interface'
import { login, register } from './user.actions'
import { RootState } from '../../app/store'

const initialState: IInitialState = {
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user') as string)
    : null,
  isLoading: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: state => {
      state.user = null
      localStorage.removeItem('user')
      state.isLoading = false
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user
        localStorage.setItem('user', JSON.stringify(action.payload.user))
        localStorage.setItem('accessToken', action.payload.accessToken)
        localStorage.setItem('refreshToken', action.payload.refreshToken)
        state.isLoading = false
      })
      .addCase(login.rejected, state => {
        state.user = null
        localStorage.removeItem('user')
        state.isLoading = false
      })
      .addCase(register.pending, state => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user
        localStorage.setItem('user', JSON.stringify(action.payload.user))
        localStorage.setItem('accessToken', action.payload.accessToken)
        localStorage.setItem('refreshToken', action.payload.refreshToken)
        state.isLoading = false
      })
      .addCase(register.rejected, state => {
        state.user = null
        localStorage.removeItem('user')
        state.isLoading = false
      })
  },
})

export const { logout } = userSlice.actions

export const selectUser = (state: RootState) => state.user.user

export default userSlice.reducer
