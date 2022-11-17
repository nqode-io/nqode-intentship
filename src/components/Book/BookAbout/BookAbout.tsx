import React, { useEffect, useState } from 'react';
import classes from './BookAbout.module.scss';
import image from 'util/327752.jpeg';
import { useParams } from 'react-router-dom';
import Book from 'model/Book';
import axios from '../../../axios/axiosConfig';
import Button from 'components/core/Button/Button';
import authService from 'services/authService';
import Input from 'components/core/Input/Input';

const BookAbout: React.FC = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Book>({} as Book);
  const [days, setDays] = useState<number>(0);

  const { isAdministrator } = authService;

  const getBook = () => {
    axios.get(`/book/${id}`).then((res) => {
      setBook(res.data);
    });
  };

  const rentBook = () => {
    axios.post(`/rent/book/${id}/user?rentPeriod=${days}`);
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
        {`Days (Renting will start from today):`}
        <Input
          type={'number'}
          placeholder={'days...'}
          id={'days'}
          name={'days'}
          setValue={function (value: string): void {
            throw new Error('Function not implemented.');
          }}
        />
        <div className={classes['c-book-details__buttons']}>
          <Button name={'RENT'} />
          {isAdministrator() ? <Button name={'CREATE COPY'} /> : null}
        </div>
      </div>
    </div>
  );
};

export default BookAbout;
