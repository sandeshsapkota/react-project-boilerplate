import axios, { AxiosInstance } from 'axios';
import { getToken } from '@/utils/helpers/token.utils';

const http = () => {
  const axiosConfig = {
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const instance: AxiosInstance = axios.create(axiosConfig);

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
