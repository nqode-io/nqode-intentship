import AdminBooksPage from 'pages/Admin/AdminBooksPage';
import Login from 'pages/Login/Login';

import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import classes from './App.module.scss';
import StandardLayout from './components/Layout/StandardLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin-books" element={<AdminBooksPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
