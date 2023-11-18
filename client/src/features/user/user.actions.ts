import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthService } from '../../auth/auth.service'

export const login = createAsyncThunk('auth/login', AuthService.loginUser)
