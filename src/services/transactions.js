import fetch from '../utils/fetch'

export const key = 'transactions'
export const listTransactions = (query = '') => {
  console.log('query', query)
  return fetch.get(`/${key}?include=true&${query}`)
}
export const createTransaction = (data) => fetch.post(`/${key}`, data)
export const getTransaction = (id) => fetch.get(`/${key}/${id}?include=true`)
export const deleteTransaction = (id) => fetch.delete(`/${key}/${id}`)
