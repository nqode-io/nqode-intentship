import React, { useEffect, useState } from 'react';
import classes from './BookAbout.module.scss';
import image from 'util/327752.jpeg';
import { Link, useParams } from 'react-router-dom';
import Book from 'model/Book';
import axios from '../../../axios/axiosConfig';
import Button from 'components/core/Button/Button';
import authService from 'services/authService';
import Input from 'components/core/Input/Input';
import bookService from 'services/api/bookService';
import rentService from 'services/api/rentService';
import bookCopyService from 'services/api/bookCopyService';

interface BookCopy {
  id: null;
  identifier: string;
  bookId: string | undefined;
}

const BookAbout: React.FC = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Book>({} as Book);
  const [days, setDays] = useState<string>('');

  const { isAdministrator } = authService;
  const { getBook } = bookService;
  const { rentBook } = rentService;
  const { createBookCopy } = bookCopyService;

  const fetchBookHandler = () => {
    getBook(id).then((data) => setBook(data));
  };

  const rentBookHandler = () => {
    rentBook(id, days)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const createBookCopyHandler = () => {
    const data: BookCopy = { id: null, identifier: crypto.randomUUID(), bookId: id };
    createBookCopy(id, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const changeDaysHandler = (value: string) => {
    setDays(value);
  };

  useEffect(() => {
    fetchBookHandler();
  }, [id]);

  return (
    <div className={classes['c-book-details']}>
      <div className={classes['c-book-details__image-holder']}>
        <img src={image} className={classes['c-book-details__image']} />
      </div>
      <div className={classes['c-book-details__about']}>
        <h1>{book.title}</h1>
        <div className={classes['c-book-details__author']}>{book.author}</div>
        <div className={classes['c-book-details__description']}>About book: {book.description}</div>
        <div className={classes['c-book-details__copies']}>
          Number of copies : {book.numOfCopies}
        </div>
        <div className={classes['c-book-details__days']}>
          <div style={{ marginBottom: '0.5rem' }}> {`Days (Renting will start from today):`}</div>
          <Input
            type={'number'}
            placeholder={'days...'}
            id={'days'}
            name={'days'}
            setValue={changeDaysHandler}
          />
        </div>
        <div className={classes['c-book-details__buttons']}>
          <Button name={'RENT'} clickHandler={rentBookHandler} />
          {isAdministrator() ? (
            <Button name={'CREATE COPY'} clickHandler={createBookCopyHandler} />
          ) : null}
        </div>
        {isAdministrator() ? <Link to={`/book/edit/${id}`}>Edit book</Link> : null}
      </div>
    </div>
  );
};

export default BookAbout;
