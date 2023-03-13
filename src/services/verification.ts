import fetch from '../utils/fetch';

export const key = 'verification-tokens';
export const resendVerification = (data: any) => fetch.post(`/${key}`, data);
export const verify = (token: string) => fetch.get(`/${key}?token=${token}`);
