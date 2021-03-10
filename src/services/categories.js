import fetch from '../utils/fetch'

export const listCategories = () => fetch.get('/categories')
