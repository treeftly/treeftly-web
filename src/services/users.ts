import fetch from "../utils/fetch";

export const key = "users";
export const updateProfile = (data: any) =>
  fetch.patch(`/${key}/${data.id}`, data);
export const updatePassword = (data: any) =>
  fetch.put(`/password/${data.id}`, data);
