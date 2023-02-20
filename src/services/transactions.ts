import fetch from '../utils/fetch';

export const key = 'transactions';
export const listTransactions = (query = '') =>
  fetch.get(`/${key}?include=true&$sort[date]=-1&${query}`);
export const createTransaction = (data: any) => fetch.post(`/${key}`, data);
export const getTransaction = (id: any) =>
  fetch.get(`/${key}/${id}?include=true`);
export const deleteTransaction = (id: any) => fetch.delete(`/${key}/${id}`);
export const updateTransaction = (data: any) =>
  fetch.patch(`/${key}/${data.id}`, data);
