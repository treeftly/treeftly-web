import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

import { getToken, logout } from './hooks';

const opts: AxiosRequestConfig = {};

if (process.env.REACT_APP_NODE_ENV === 'production') {
  opts.baseURL = 'https://api.treeftly.com';
}

function onRequest(config: AxiosRequestConfig) {
  const { accessToken } = getToken();

  if (accessToken) {
    Object.assign(config.headers, { Authorization: `Bearer ${accessToken}` });
  }

  return config;
}

function onResponse<TData>(res: AxiosResponse<TData>) {
  return res.data;
}

function onResponseError<TError>(error: AxiosError<TError>) {
  const publicLinks = ['/sign-in', '/sign-up'];
  if (
    error?.response?.status === 401 &&
    !publicLinks.includes(window.location.pathname)
  ) {
    logout();
  }

  return Promise.reject(error);
}

function setupAxios(axiosInstance: AxiosInstance) {
  axiosInstance.interceptors.request.use(onRequest);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);

  return axiosInstance;
}

export default setupAxios(axios.create(opts));
