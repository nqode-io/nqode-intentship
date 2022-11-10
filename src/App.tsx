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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
