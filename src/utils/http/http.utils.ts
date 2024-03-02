import axios from 'axios';
import { getToken } from '@/utils/helpers/token.utils';

const http = () => {
  const ID_TOKEN = getToken();
  const axiosConfig = {
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `{"token":"${ID_TOKEN}"}`,
    },
  };

  return axios.create(axiosConfig);
};

export default http;
