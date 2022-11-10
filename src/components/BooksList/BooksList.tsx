import BookListItem from 'components/BookListItem/BookListItem';
import React, { useEffect, useState } from 'react';
import classes from './BooksList.module.scss';
import axios from 'axios';

interface BooksListData {
  id: number;
  title: string;
  author: string;
  description: string;
  imagePath: string;
  numOfCopies: number;
}

const BooksList = () => {
  useEffect(() => {
    retriveBooks();
  }, []);

  const config = {
    headers: {
      Authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaWJyYXJ5LmlvIiwiYXVkIjoibGlicmFyeSIsImlzcyI6ImlvLmxpYnJhcnkuYXBwIiwiZXhwIjoxNjY4MDc2ODU1LCJ1c2VySWQiOjEwMDAsImVtYWlsIjoiYWRtaW5AbnFvZGUuaW8iLCJ1c2VyUm9sZSI6IkFETUlOSVNUUkFUT1IifQ.Xc9L0XHSZIVlyuLpSA4qDYELgW8HW178dwylfKJ92h85gseFvmSWwpm9CpQ5hNNwJTgd1wk3grG3JBFSGHgZCA'
    }
  };

  const [books, setBooks] = useState<BooksListData[]>([]);

  const retriveBooks = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/book`, config);
    setBooks(response.data.content);
  };

  return (
    <div className={classes['c-books-list']}>
      {books.map((item) => (
        <BookListItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default BooksList;
