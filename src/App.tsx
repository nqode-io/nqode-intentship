import Login from './components/Login/Login';
import React from 'react';
import classes from './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import BooksOverview from 'pages/BooksOverview/BooksOverview';
import SingleBook from 'pages/SingleBook/SingleBook';
import Navbar from 'components/Navbar/Navbar';

const App = () => {
  return (
    <div className={classes['c-app']}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<BooksOverview />} />
        <Route path="/booksoverview" element={<BooksOverview />} />
        <Route path="/book/:id" element={<SingleBook />} />
      </Routes>
    </div>
  );
};

export default App;
