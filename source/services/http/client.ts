import axios from 'axios';

import config from '~/configs';
import { getToken } from '~/services/storage';
//
const API = axios.create({
  baseURL: config.baseURL,
});

API.interceptors.request.use(async (config) => {
  const token = await getToken();

  if (typeof token?.replace(/['"]+/g, '') === 'string') {
    config.headers.Authorization = `Bearer ${token?.replace(/['"]+/g, '')}`;
  }
  return config;
});

// API.interceptors.response.use(async (config) => {
//   const token = await config.headers.Authorization;

//   if (token) {
//     setToken(token)
//   }

//   return config;
// });
// ./

export default API;
