import fetch from '../utils/fetch';

export const register = (data: any) => fetch.post('/users', data);
export const login = (data: any) =>
  fetch.post('/auth', { ...data, strategy: 'local' });
export const logout = () => fetch.delete(`/auth`);
export const resetPassword = (token: any, data: any) =>
  fetch.patch(`/forgot-password?token=${token}`, data);
export const forgotPassword = (data: any) =>
  fetch.post('/forgot-password', data);
