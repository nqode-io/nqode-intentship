import axios from 'axios';
import Button from 'components/core/Button/Button';
import Input from 'components/core/Input/Input';
import BookModel from 'models/BookModel';
import React, { useState } from 'react';
import classes from './BookDialog.module.scss';

const BookDialog = (oldBook: BookModel) => {
  const [book, setBook] = useState<BookModel>(oldBook);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBook((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const updateBook = async () => {
    await axios.put(`${process.env.REACT_APP_BASE_URL}/book/${book.id}`, book, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  };

  return (
    <div className={classes['c-book-dialog']}>
      <div className={classes['c-book-dialog__container']}>
        <div className={classes['c-book-dialog__input-container']}>
          <label className={classes['c-book-dialog__input-label']}>Titile</label>
          <Input name="title" onChange={handleChange} value={book.title}></Input>
        </div>
        <div className={classes['c-book-dialog__input-container']}>
          <label className={classes['c-book-dialog__input-label']}>Author</label>
          <Input name="author" onChange={handleChange} value={book.author}></Input>
        </div>
        <div className={classes['c-book-dialog__input-container']}>
          <label className={classes['c-book-dialog__input-label']}>Description</label>
          <Input name="description" onChange={handleChange} value={book.description}></Input>
        </div>
        <div className={classes['c-book-dialog__input-container']}>
          <label className={classes['c-book-dialog__input-label']}>Number of copies</label>
          <Input name="num-of-copies" onChange={handleChange} value={book.numOfCopies}></Input>
        </div>
      </div>
      <div className={classes['c-book-dialog__button-container']}>
        <Button content={'Submit'} onClick={updateBook} />
      </div>
    </div>
  );
};

export default BookDialog;
