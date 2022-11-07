import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import NewComponent from './components/NewComponent';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
    <NewComponent />
  </React.StrictMode>
);
