import { createSlice } from '@reduxjs/toolkit'
import { IInitialState } from './user.interface'
import { login } from './user.actions'

const initialState: IInitialState = {
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user') as string)
    : null,
  isLoading: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user
        localStorage.setItem('user', JSON.stringify(action.payload.user))
        state.isLoading = false
      })
      .addCase(login.rejected, state => {
        state.user = null
        localStorage.removeItem('user')
        state.isLoading = false
      })
  },
})

// export const { } = userSlice.actions

export const selectUser = (state: RootState) => state.user.user

export default userSlice.reducer
