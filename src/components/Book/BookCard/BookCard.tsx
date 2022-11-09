import React from 'react';
import { Link } from 'react-router-dom';
import classes from './BookCard.module.scss';

const BookCard = () => {
  return (
    <Link to="#" className={classes['c-book-card']}>
      <div className={classes['c-book-card__image-holder']}>
        <img src={require('../../../util/327752.jpeg')} className={classes['c-book-card__image']} />
      </div>
      <div className={classes['c-book-card__info']}>
        <div className={classes['c-book-card__book-title']}>Bogati otac siromasan otac</div>
        <div className={classes['c-book-card__book-author']}>Robert Kiosaki, Seron Lehter</div>
        <div className={classes['c-book-card__book-copies']}>30 copies</div>
      </div>
    </Link>
  );
};

export default BookCard;
