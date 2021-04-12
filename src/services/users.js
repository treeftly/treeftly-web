import fetch from '../utils/fetch'

export const key = 'users'
export const updateProfile = (data) => fetch.patch(`/${key}/${data.id}`, data)
export const updatePassword = (data) => fetch.put(`/password/${data.id}`, data)
