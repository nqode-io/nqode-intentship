import React, { useEffect, useState } from 'react';
import classes from './BookAbout.module.scss';
import image from 'util/327752.jpeg';
import { Link, useParams } from 'react-router-dom';
import Book from 'model/Book';
import axios from '../../../axios/axiosConfig';
import Button from 'components/core/Button/Button';
import authService from 'services/authService';
import Input from 'components/core/Input/Input';

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

  const getBook = () => {
    axios.get(`/book/${id}`).then((res) => {
      setBook(res.data);
    });
  };

  const rentBook = () => {
    axios
      .post(`/rent/book/${id}/user?rentPeriod=${days}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.response.data.message));
  };

  const createBookCopy = () => {
    const data: BookCopy = { id: null, identifier: crypto.randomUUID(), bookId: id };

    axios
      .post(`/book/${id}/book-copy`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.response.data.message));
  };

  const changeDaysHandler = (value: string) => {
    setDays(value);
  };

  useEffect(() => {
    getBook();
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
          <Button name={'RENT'} clickHandler={rentBook} />
          {isAdministrator() ? <Button name={'CREATE COPY'} clickHandler={createBookCopy} /> : null}
        </div>
        {isAdministrator() ? <Link to={`/book/edit/${id}`}>Edit book</Link> : null}
      </div>
    </div>
  );
};

export default BookAbout;
