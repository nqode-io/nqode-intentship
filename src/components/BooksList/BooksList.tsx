import React, { useEffect, useState } from 'react';
import BookListItem from 'components/BookListItem/BookListItem';
import classes from './BooksList.module.scss';
import axios from 'axios';
import BookModel from 'models/BookModel';

interface Pagable {
  current?: boolean;
  page: number;
  size: number;
  sort: 'asc' | 'desc';
}

const BooksList = () => {
  const [books, setBooks] = useState<BookModel[]>([]);

  const retriveBooks = async () => {
    let url = `${process.env.REACT_APP_BASE_URL}/book`;
    const params: Pagable = {
      page: 0,
      size: 8,
      sort: 'asc'
    };

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      params
    });

    setBooks(response.data.content);
  };

  useEffect(() => {
    retriveBooks();
  }, []);

  return (
    <div className={classes['c-books-list']}>
      {books.map((item) => (
        <BookListItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default BooksList;
