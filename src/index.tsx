import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { RoleContextProvider } from 'contexts/roleContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RoleContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RoleContextProvider>
  </React.StrictMode>
);
