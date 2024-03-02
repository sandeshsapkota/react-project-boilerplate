import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import http from '@/utils/http/http.utils';

const useAxiosInterceptors = () => {
  const navigate = useNavigate();
  const instance = http();

  /*
   * intercepting response
   * */

  useEffect(() => {
    const interceptor = instance.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        console.log(error, '------------');

        const statusCode = error ?? error.response.status;

        if (statusCode === 401) {
          navigate('/login');
        }

        if (statusCode === 404) {
          navigate('/404');
        }

        /* any status codes that falls outside the range of 2xx cause this function to trigger */
        return Promise.reject(error);
      },
    );

    return () => {
      instance.interceptors.response.eject(interceptor);
    };
  }, [navigate]);

  return null;
};

export default useAxiosInterceptors;
