import fetch from '../utils/fetch'

export const listCategories = () => fetch.get('/categories')
export const createCategory = (data) => fetch.post('/categories', data)
export const deleteCategory = (id) => fetch.delete(`/categories/${id}`)
