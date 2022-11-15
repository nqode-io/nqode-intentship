import React, { useEffect, useState } from 'react';
import classes from './BookAbout.module.scss';
import image from 'util/327752.jpeg';
import { useParams } from 'react-router-dom';
import Book from 'model/Book';
import axios from 'axios';
import Button from 'components/core/Button/Button';

const backend_url = process.env.REACT_APP_BACKEND_URL;

const BookAbout: React.FC = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Book>({} as Book);

  useEffect(() => {
    axios.get(`${backend_url}/book/${id}`).then((res) => {
      setBook(res.data);
    });
  }, [id]);

  return (
    <div className={classes['c-book-details']}>
      <div className={classes['c-book-details__image-holder']}>
        <img src={image} className={classes['c-book-details-image']} />
      </div>
      <div className={classes['c-book-details__about']}>
        <h1>{book.title}</h1>
        <div className={classes['c-book-details__author']}>{book.author}</div>
        <div className={classes['c-book-details__description']}>{book.description}</div>
        <div className={classes['c-book-details__copies']}>
          Number of copies : {book.numOfCopies}
        </div>
        <div className={classes['c-book-details__buttons']}>
          <Button
            name={'RENT'}
            clickHandler={function (): void {
              throw new Error('Function not implemented.');
            }}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default BookAbout;
