import fetch from '../utils/fetch'

export const register = (data) => fetch.post('/users', data)
export const login = (data) => fetch.post('/auth', { ...data, strategy: 'local' })
export const logout = () => fetch.delete(`/auth`)
