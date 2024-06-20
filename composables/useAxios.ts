import { useRuntimeConfig } from '#app';
import type { AxiosInstance, AxiosResponse } from 'axios';
import Axios from 'axios';

export default function useAxios(): AxiosInstance {
  const config = useRuntimeConfig();

  const axios: AxiosInstance = Axios.create({
    baseURL: config.public.apiBaseUrl,
  });

  axios.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error) => {
      if (error.response) {
        console.error('Response Error:', error.response);
      } else if (error.request) {
        console.error('Request Error:', error.request);
      } else {
        console.error('General Error:', error.message);
      }
      return Promise.reject(error);
    }
  );

  return axios;
}
