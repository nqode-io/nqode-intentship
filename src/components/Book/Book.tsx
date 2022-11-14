import React, { useEffect, useState } from 'react';
import classes from './Book.module.scss';
import image from 'img/book1.png';
import Button from 'components/core/Button/Button';
import { useLocation } from 'react-router-dom';
import BookModel from 'models/BookModel';
import axios from 'axios';

const Book = () => {
  const [book, setBook] = useState<BookModel | undefined>({} as BookModel);
  const location = useLocation();
  const id = parseInt(location.pathname.split('/')[2]);

  const retriveBook = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/book/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    setBook(response.data);
  };

  useEffect(() => {
    retriveBook();
  }, []);

  return (
    <div className={classes['c-book']}>
      <div className={classes['c-book__image-container']}>
        <img className={classes['c-book__image']} alt="" src={image}></img>
      </div>
      <div className={classes['c-book__side-content']}>
        <div className={classes['c-book__info-container']}>
          <strong className={classes['c-book__title']}>{book?.title}</strong>
          <span className={classes['c-book__author']}>{book?.author}</span>
          <span className={classes['c-book__description']}>{book?.description}</span>
          <span className={classes['c-book__num-of-copies']}>
            Number of Copies: {book?.numOfCopies}
          </span>
        </div>
        <div className={classes['c-book__tools']}>
          <div>
            <Button content="Modify" />
            <Button content="Delete" />
          </div>
          <Button content="Rent" />
        </div>
      </div>
    </div>
  );
};

export default Book;
