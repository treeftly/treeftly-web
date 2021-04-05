import fetch from '../utils/fetch'

export const key = 'transactions'
export const listTransactions = () => fetch.get(`/${key}?include=true`)
export const createTransaction = (data) => fetch.post(`/${key}`, data)
export const getTransaction = (id) => fetch.get(`/${key}/${id}?include=true`)
export const deleteTransaction = (id) => fetch.delete(`/${key}/${id}`)
