import axios from 'axios';
import Button from 'components/core/Button/Button';
import InputContainer from 'components/core/InputContainer/InputContainer';
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
        <InputContainer onChange={handleChange} value={book.title} label="Title" />
        <InputContainer onChange={handleChange} value={book.author} label="Author" />
        <InputContainer onChange={handleChange} value={book.description} label="Description" />
        <InputContainer onChange={handleChange} value={book.numOfCopies} label="Number of Copies" />
      </div>
      <div className={classes['c-book-dialog__button-container']}>
        <Button content={'Submit'} onClick={updateBook} />
      </div>
    </div>
  );
};

export default BookDialog;
