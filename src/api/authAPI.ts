import axios from 'axios'

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
  // baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:7542/2.0/' : 'https://neko-back.herokuapp.com/2.0/',
  withCredentials: true,
})

export const authAPI = {
  login(data: RequiredLoginDataType) {
    return instance.post<RequiredLoginDataType, ResponseDataType>('auth/login', data)
  },
  logout() {
    return instance.delete<any, any>('auth/login')
  },
}

export type RequiredLoginDataType = {
  email: string
  password: string
  rememberMe: boolean
}

export type ResponseDataType = {
  _id: string
  email: string
  name: string
  avatar?: string
  publicCardPacksCount: number // количество колод
  created: Date
  updated: Date
  isAdmin: boolean
  verified: boolean // подтвердил ли почту
  rememberMe: boolean
  error?: string
}
