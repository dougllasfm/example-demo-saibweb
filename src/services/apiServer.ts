import axios from 'axios';
import { parseCookies } from 'nookies';

export function apiServer(ctx?: any) {
  const { token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: 'https://interno.saibweb.com.br/api/',
  });

  api.interceptors.request.use(async (config: any) => {
    return config;
  });
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }

  return api;
}

