import fetch from "../utils/fetch";

export const key = "verification-tokens";
export const resendVerification = (data) => fetch.post(`/${key}`, data);
export const verify = (token) => fetch.get(`/${key}?token=${token}`);
