import React from 'react';
import Book from 'model/Book';
import { Link } from 'react-router-dom';
import classes from './BookCard.module.scss';
import image from '../../../util/327752.jpeg';

const BookCard: React.FC<Book> = ({ id, title, author, numOfCopies, imagePath }) => {
  return (
    <Link to={`/book/${id}`} className={classes['c-book-card']}>
      <div className={classes['c-book-card__image-holder']}>
        <img src={image} className={classes['c-book-card__image']} />
      </div>
      <div className={classes['c-book-card__info']}>
        <div className={classes['c-book-card__book-title']}>{title}</div>
        <div className={classes['c-book-card__book-author']}>{author}</div>
        <div className={classes['c-book-card__book-copies']}>{numOfCopies} copies</div>
      </div>
    </Link>
  );
};

export default BookCard;
