import Login from './components/Login/Login';
import React from 'react';
import classes from './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import BooksOverview from 'pages/BooksOverview/BooksOverview';
import Book from 'components/Book/Book';

const App = () => {
  return (
    <div className={classes['c-app']}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<BooksOverview />} />
        <Route path="/booksoverview" element={<BooksOverview />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </div>
  );
};

export default App;
