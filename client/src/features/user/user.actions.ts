import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthService } from '../../auth/auth.service'

export const login = createAsyncThunk<IToken, IAuth>(
  'auth/login',
  async (data, thunkApi) => {
    try {
      const response = await AuthService.loginUser(data)
      return response
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  },
)

export const register = createAsyncThunk<IToken, IAuth>(
  'auth/register',
  async (data, thunkApi) => {
    try {
      const response = await AuthService.registerUser(data)
      return response
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  },
)
