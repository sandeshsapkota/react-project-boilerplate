import axios from 'axios';
import { getToken } from '@/utils/helpers/token.utils';

type HttpTypes = {
  additionalHeader?: { 'Content-Type'?: string };
};

const http = (config?: HttpTypes) => {
  /*
   * axios config
   * */
  const axiosConfig = {
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      ...config?.additionalHeader,
    },
  };

  const instance = axios.create(axiosConfig);

  /*
   * intercepting request
   * */
  instance.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return instance;
};

export default http;
