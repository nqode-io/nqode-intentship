import React from 'react';
import classes from './Book.module.scss';
import image from 'img/book1.png';
import Button from 'components/core/Button/Button';

const Book = () => {
  return (
    <div className={classes['c-book']}>
      <div className={classes['c-book__image-container']}>
        <img className={classes['c-book__image']} alt="" src={image}></img>
      </div>
      <div>
        <div className={classes['c-book__info-container']}>
          <span className={classes['c-book__title']}>title</span>
          <span className={classes['c-book__author']}>author</span>
          <span className={classes['c-book__additional-info']}>decription</span>
          <span className={classes['c-book__additional-info']}>numberofcopies</span>
        </div>
        <div className={classes['c-book__tools']}>
          <Button content="Modify" onClick={() => {}} />
          <Button content="Delete" onClick={() => {}} />
          <Button content="Rent" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Book;
