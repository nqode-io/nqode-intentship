import React, { useEffect, useState } from 'react';
import Button from 'components/core/Button/Button';
import image from './book.jpg';
import classes from './BookDetails.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import bookService from 'services/api/bookService';
import authService from 'services/authService';
import Input from 'components/core/Input/Input';
import Book from 'model/Book';

const BookDetails: React.FC = () => {
  const { id } = useParams();
  const { getBook, editBook, deleteBook } = bookService;
  const navigate = useNavigate();

  const [book, setBook] = useState<Book>({} as Book);

  const changeTitleHandler = (value: string): void => {
    setBook((prevBook) => ({ ...prevBook, title: value }));
  };

  const changeAuthorHandler = (value: string): void => {
    setBook((prevBook) => ({ ...prevBook, author: value }));
  };

  const changeDescriptionHandler = (value: string): void => {
    setBook((prevBook) => ({ ...prevBook, description: value }));
  };

  const deleteBookHandler = (): void => {
    deleteBook(`${id}`).then((res) => {
      navigate('/');
    });
  };

  const editBookHandler = (): void => {
    editBook(`${id}`, book).then((res) => window.location.reload());
  };

  useEffect(() => {
    getBook(id!)
      .then((res) => {
        console.log(res);
        setBook(res);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className={classes['c-book-details']}>
      <div className={classes['c-book-details__image-holder']}>
        <img src={image} className={classes['c-book-details-image']} />
      </div>
      <div className={classes['c-book-details__about']}>
        <Input
          type={'text'}
          placeholder={'Title'}
          value={book.title}
          id={'title'}
          label={'Title'}
          name={'title'}
          setValue={changeTitleHandler}
        />
        <div className={classes['c-book-details__author']}>
          <Input
            type={'text'}
            placeholder={'Author'}
            id={'author'}
            label={'Author'}
            value={book.author}
            name={'author'}
            setValue={changeAuthorHandler}
          />
        </div>
        <div className={classes['c-book-details__description']}>
          <Input
            type={'text'}
            placeholder={'Description'}
            id={'description'}
            label={'Description'}
            value={book.description}
            name={'description'}
            setValue={changeDescriptionHandler}
          />
        </div>
        <div className={classes['c-book-details__copies']}>
          Number of copies : {book.numOfCopies}
        </div>
        <div className={classes['c-book-details__buttons']}>
          <Button name="Edit" type="secondary" clickHandler={editBookHandler} />
          <Button name="Delete" type="danger" clickHandler={deleteBookHandler} />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
