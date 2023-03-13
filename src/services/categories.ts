import { createContext } from 'react';

import fetch from '../utils/fetch';

export const key = 'categories';
export const listCategories = <TData>() =>
  fetch.get<TData>(`/${key}?$sort[createdAt]=-1`);
export const createCategory = <TData>(data: TData) =>
  fetch.post<TData>(`/${key}`, data);
export const deleteCategory = <TData>(id: string) =>
  fetch.delete<TData>(`/${key}/${id}`);
export const updateCategory = <TData>(id: string, data: TData) =>
  fetch.patch<TData>(`/${key}/${id}`, data);
export const CategoriesContext = createContext({ data: [] });
