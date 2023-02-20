import axios from 'axios';

import { getToken, logout } from './hooks';

const opts = {};

// @ts-expect-error TS(2580): Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
if (process.env.REACT_APP_NODE_ENV === 'production') {
  // @ts-expect-error TS(2339): Property 'baseURL' does not exist on type '{}'.
  opts.baseURL = 'https://api.treeftly.com';
}

const fetch = axios.create(opts);

fetch.interceptors.request.use((config) => {
  const { accessToken } = getToken();

  if (accessToken) {
    Object.assign(config.headers, { Authorization: `Bearer ${accessToken}` });
  }

  return config;
});

fetch.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    const publicLinks = ['/sign-in', '/sign-up'];
    if (
      error?.response?.status === 401 &&
      !publicLinks.includes(window.location.pathname)
    ) {
      logout();
    }

    return Promise.reject(error);
  },
);

export default fetch;
