import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../BookCard/BookCard';
import classes from './AdminBooks.module.scss';
import Book from 'model/Book';

const backend_url = process.env.REACT_APP_BACKEND_URL;

const AdminBooks: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const getBooks = (): void => {
    axios.get(`${backend_url}/book?page=0&size=10&sort=id`).then((res) => {
      setBooks(res.data.content);
    });
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className={classes['c-admin-books']}>
      {books.map((book, index) => {
        return (
          <BookCard
            key={index}
            id={book.id}
            title={book.title}
            author={book.author}
            description={book.description}
            imagePath={book.imagePath}
            numOfCopies={book.numOfCopies}
          />
        );
      })}
    </div>
  );
};

export default AdminBooks;
