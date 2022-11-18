import React, { useEffect, useState } from 'react';
import BookListItem from 'components/BookListItem/BookListItem';
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

interface BooksListProps {
  componentType?: 'rented' | 'history';
}

interface Pagable {
  current?: boolean;
  page: number;
  size: number;
  sort: 'asc' | 'desc';
}

const BooksList = ({ componentType }: BooksListProps) => {
  const [books, setBooks] = useState<BooksListData[]>([]);

  const retriveBooks = async () => {
    let url = `${process.env.REACT_APP_BASE_URL}/${componentType ? 'rent/book' : 'book'}`;
    const params: Pagable = {
      page: 0,
      size: 8,
      sort: 'asc'
    };

    if (componentType === 'rented') {
      params.current = true;
    }

    if (componentType === 'history') {
      params.current = false;
    }

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
