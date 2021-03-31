import fetch from '../utils/fetch'

export const key = 'transactions'
export const createTransaction = (data) => fetch.post(`/${key}`, data)
