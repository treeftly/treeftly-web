import axios from 'axios'
import { logout, getToken } from './hooks'

const opts = {}

if (process.env.NODE_ENV === 'production') {
  opts.baseURL = 'https://my-api-url.com'
}

const fetch = axios.create()

fetch.interceptors.request.use((config) => {
  const { accessToken } = getToken()

  if (accessToken) {
    Object.assign(config.headers, { Authorization: `Bearer ${accessToken}` })
  }

  return config
})

fetch.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => {
    const publicLinks = ['/sign-in', '/sign-up']
    if (error?.response?.status === 401 && !publicLinks.includes(window.location.pathname)) {
      logout()
    }

    return Promise.reject(error)
  }
)

export default fetch
