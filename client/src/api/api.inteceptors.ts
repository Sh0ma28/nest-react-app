import axios from 'axios'
import { AuthService } from '../auth/auth.service'

export const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

instance.interceptors.request.use(
  async config => {
    const accessToken = localStorage.getItem('accessToken')

    if (config && config.headers && accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  },
  error => Promise.reject(error),
)

instance.interceptors.response.use(
  response => response,
  async error => {
    const config = error.config

    if (error.response.status === 403 && config && !config._isRetry) {
      config._isRetry = true

      await AuthService.refreshToken()

      return instance(config)
    } else alert('Произошла непредвиденная ошибка')
    console.log(error)
    return Promise.reject(error)
  },
)
