// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { createContext } from "react";

import fetch from "../utils/fetch";

export const key = "categories";
export const listCategories = () => fetch.get(`/${key}?$sort[createdAt]=-1`);
export const createCategory = (data: any) => fetch.post(`/${key}`, data);
export const deleteCategory = (id: any) => fetch.delete(`/${key}/${id}`);
export const updateCategory = (data: any) =>
  fetch.patch(`/${key}/${data.id}`, data);
export const CategoriesContext = createContext({ data: [] });
