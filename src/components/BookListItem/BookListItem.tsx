import React from 'react';
import classes from 'BookListItem.module.scss';
import image from 'img/book1.png';
import { Link } from 'react-router-dom';

interface BookProps {
  item: {
    id: number;
    title: string;
    author: string;
  };
}

const BookListItem = ({ item }: BookProps) => {
  return (
    <div className={classes['c-book-list-item']}>
      <div className={classes['c-book-list-item__image-container']}>
        <img alt="" src={image} className={classes['c-book-list-item__image']}></img>
      </div>
      <div className={classes['c-book-list-item__info-container']}>
        <Link to={`/book/${item.id}`} className={classes['c-book-list-item__link']}>
          <strong>{item.title}</strong>
        </Link>
        {item.author}
      </div>
    </div>
  );
};

export default BookListItem;
