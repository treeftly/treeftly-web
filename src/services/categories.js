import { createContext } from 'react'
import fetch from '../utils/fetch'

export const key = 'categories'
export const listCategories = () => fetch.get(`/${key}?$sort[createdAt]=-1`)
export const createCategory = (data) => fetch.post(`/${key}`, data)
export const deleteCategory = (id) => fetch.delete(`/${key}/${id}`)
export const updateCategory = (data) => fetch.patch(`/${key}/${data.id}`, data)
export const CategoriesContext = createContext({ data: [] })
