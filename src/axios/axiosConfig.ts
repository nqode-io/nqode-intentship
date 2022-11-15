import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers = { Authorization: `Bearer ${token}` };
  }
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const requestInterceptor = () => {
  axios.interceptors.request.use(onRequest, onRequestError);
};

const axiosConfig = { requestInterceptor };

export default axiosConfig;
