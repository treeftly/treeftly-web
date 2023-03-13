import axios from 'axios';

declare module '*.png' {
  const value: any;
  export = value;
}

declare module 'axios' {
  export interface AxiosInstance {
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  }
}
