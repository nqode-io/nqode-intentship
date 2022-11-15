import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
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

axios.interceptors.request.use(onRequest, onRequestError);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
