import { PaginatedData } from 'utils/types';

import fetch from '../utils/fetch';

export type Transaction = {
  id: number;
  date: string;
  amount: number;
  description: string;
  categoryId: number;
  userId: number;
  createdAt: string;
  updatedAt: string;
  'user.id': number;
  'user.email': string;
  'user.firstName': string;
  'user.lastName': string;
  'user.isVerified': true;
  'user.createdAt': string;
  'user.updatedAt': string;
  'category.id': number;
  'category.name': string;
  'category.label': string;
  'category.userId': null;
  'category.createdAt': string;
  'category.updatedAt': string;
};
export type TransactionsResponse = PaginatedData<Transaction>;

export const key = 'transactions';
export const listTransactions = <TData>(query = '') =>
  fetch.get<TData>(`/${key}?include=true&$sort[date]=-1&${query}`);
export const createTransaction = (data: any) => fetch.post(`/${key}`, data);
export const getTransaction = (id: any) =>
  fetch.get(`/${key}/${id}?include=true`);
export const deleteTransaction = (id: any) => fetch.delete(`/${key}/${id}`);
export const updateTransaction = (data: any) =>
  fetch.patch(`/${key}/${data.id}`, data);
