import axios from 'axios'

const opts = {}

if (process.env.NODE_ENV === 'production') {
  opts.baseURL = 'https://my-api-url.com'
}

const fetch = axios.create()

fetch.interceptors.response.use((res) => {
  return res.data
})

export default fetch
