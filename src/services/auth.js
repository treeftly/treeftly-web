import fetch from '../utils/fetch'

export const register = (data) => fetch.post('/users', data)
