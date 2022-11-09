import BooksList from 'components/BooksList/BooksList';
import Navbar from 'components/Navbar/Navbar';
import React from 'react';
import classes from './BooksOverview.module.scss';

const BooksOverview = () => {
  return (
    <div>
      <Navbar />
      <div className={classes['c-books-overview']}>
        <BooksList />
      </div>
    </div>
  );
};

export default BooksOverview;
