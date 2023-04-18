import axios from 'axios'

import { ResponseDataType } from 'api/authAPI'

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
  // baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:7542/2.0/' : 'https://neko-back.herokuapp.com/2.0/',
  withCredentials: true,
})

export const profileAPI = {
  me() {
    const promise = instance.post<any, ResponseDataType>('auth/me', {})

    console.log('g')

    return promise
  },
  // updateStatus(status) {
  //   return instance.patch('auth/me', {}) //put or patch????
  // },
}
