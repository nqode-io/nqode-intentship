import BookListItem from 'components/BookListItem/BookListItem';
import React, { useEffect, useState } from 'react';
import classes from './BooksList.module.scss';
import data from 'data/books.json';
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
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaWJyYXJ5LmlvIiwiYXVkIjoibGlicmFyeSIsImlzcyI6ImlvLmxpYnJhcnkuYXBwIiwiZXhwIjoxNjY4MDAyNDMxLCJ1c2VySWQiOjEwMDAsImVtYWlsIjoiYWRtaW5AbnFvZGUuaW8iLCJ1c2VyUm9sZSI6IkFETUlOSVNUUkFUT1IifQ.XbaKJrfBP2SH3jQ7jdyDUPMw3su1HFSSo3E9zc-iYbM-er44Tva1I3WTaQURaTBFz8od4SaI6ZgjcfbqQMW7aA'
    }
  };

  const [books, setBooks] = useState<BooksListData[]>([]);

  const retriveBooks = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/book`, config);
      setBooks(response.data.content);
    } catch {}
  };

  // const getBooks = () => {
  //   setBooks(data);
  // };

  return (
    <div className={classes['c-books-list']}>
      {books.map((item) => (
        <BookListItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default BooksList;
