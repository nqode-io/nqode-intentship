import React from 'react';
import classes from 'App.module.scss';
import { Route, Routes } from 'react-router-dom';
import Login from 'pages/Login/Login';
import BooksOverview from 'pages/BooksOverview/BooksOverview';
import SingleBook from 'pages/SingleBook/SingleBook';
import Navbar from 'components/Navbar/Navbar';
import Dashboard from 'pages/Admin/Dashboard/Dashboard';
import Profile from 'pages/Profile/Profile';

const App = () => {
  return (
    <div className={classes['c-app']}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/booksoverview" element={<BooksOverview />} />
        <Route path="/book/:id" element={<SingleBook />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
