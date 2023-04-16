import axios from 'axios'

export const registrationAPI = {
  register(email: string, password: string) {
    return axios.post<{ error?: string }>(
      'http://localhost:7542/2.0/auth/register',
      { email, password },
      { withCredentials: true }
    )
  },
}
