import React from 'react';
import books from '../../../util/books.json';
import BookCard from '../BookCard/BookCard';
import classes from './AdminBooks.module.scss';

const AdminBooks = () => {
  return (
    <div className={classes['c-admin-books']}>
      <BookCard />
    </div>
  );
};

export default AdminBooks;
