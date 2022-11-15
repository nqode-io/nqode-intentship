import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import axiosConfig from './axios/axiosConfig';

const { requestInterceptor } = axiosConfig;

requestInterceptor();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
