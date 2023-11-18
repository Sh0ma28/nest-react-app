import axios from 'axios'
import { IAuth, IToken } from '../features/user/user.interface'

const baseURL = import.meta.env.VITE_SERVER_URL

export const AuthService = {
  async registerUser(data: IAuth) {
    const response = await axios.post<IToken>(`${baseURL}/auth/register/`, {
      ...data,
    })
    if (response.status === 200) {
      localStorage.setItem('accessToken', response.data.accessToken)
      localStorage.setItem('refreshToken', response.data.refreshToken)
    }
    return response.data
  },

  async loginUser(data: IAuth) {
    const response = await axios.post<IToken>(`${baseURL}/auth/login/`, {
      ...data,
    })
    if (response.status === 200) {
      localStorage.setItem('accessToken', response.data.accessToken)
      localStorage.setItem('refreshToken', response.data.refreshToken)
    }
    return response.data
  },

  async refreshToken() {
    const refreshToken = localStorage.getItem('refreshToken')
    const response = await axios.post<IToken>(`${baseURL}/auth/refresh/`, {
      refreshToken,
    })
    if (response.status === 200) {
      localStorage.setItem('accessToken', response.data.accessToken)
      localStorage.setItem('refreshToken', response.data.refreshToken)
    }
    return response.data
  },
}
