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

type BooksListProps = {
  filter?: string;
};

const BooksList = ({ filter }: BooksListProps) => {
  const [books, setBooks] = useState<BooksListData[]>([]);

  const retriveBooks = async () => {
    if (filter === 'rented-current') {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/rent/book`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        params: {
          current: true,
          page: 0,
          size: 8,
          sort: 'asc'
        }
      });
      setBooks(response.data.content);
    } else if (filter === 'rented-history') {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/rent/book`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        params: {
          current: false,
          page: 0,
          size: 8,
          sort: 'asc'
        }
      });
      setBooks(response.data.content);
    } else {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/book`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        params: {
          page: 0,
          size: 8,
          sort: 'asc'
        }
      });
      setBooks(response.data.content);
    }
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
