import BooksList from 'components/BooksList/BooksList';
import React from 'react';
import classes from './BooksOverview.module.scss';

const BooksOverview = () => {
  return (
    <div>
      <div className={classes['c-books-overview']}>
        <BooksList />
      </div>
    </div>
  );
};

export default BooksOverview;
