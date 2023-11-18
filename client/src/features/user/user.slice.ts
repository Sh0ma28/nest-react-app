import { createSlice } from '@reduxjs/toolkit'
import { IInitialState } from './user.interface'

const initialState: IInitialState = {
  user: null,
  isLoading: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {},
})

// export const { } = userSlice.actions

export const selectUser = (state: RootState) => state.user.user

export default userSlice.reducer
