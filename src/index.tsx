import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
<<<<<<< HEAD
import axiosConfig from './axios/axiosConfig';

const { requestInterceptor } = axiosConfig;

requestInterceptor();
=======

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers = { Authorization: `Bearer ${token}` };
  }
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[response error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

axios.interceptors.request.use(onRequest, onRequestError);
>>>>>>> 6455f4e (User profile)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
