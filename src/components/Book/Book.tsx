import React, { useEffect, useState } from 'react';
import classes from './Book.module.scss';
import image from 'img/book1.png';
import Button from 'components/core/Button/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import BookModel from 'models/BookModel';
import axios from 'axios';
import BookDialog from 'components/BookDialog/BookDialog';
import tokenService from 'services/tokenService';

const Book = () => {
  const [book, setBook] = useState<BookModel>({} as BookModel);
  const [modify, setModify] = useState<Boolean>(false);
  const location = useLocation();
  const id = parseInt(location.pathname.split('/')[2]);
  const navigate = useNavigate();
  const { isRoleAdmin } = tokenService;
  const isAdmin = isRoleAdmin();

  const retriveBook = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/book/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    setBook(response.data);
  };

  const deleteBook = async () => {
    await axios
      .delete(`${process.env.REACT_APP_BASE_URL}/book/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(() => navigate('/booksoverview'));
  };

  useEffect(() => {
    retriveBook();
  }, []);

  return (
    <div className={classes['c-book']}>
      <div className={classes['c-book__image-container']}>
        <img className={classes['c-book__image']} alt="" src={image}></img>
      </div>
      {!modify ? (
        <div className={classes['c-book__side-content']}>
          <div className={classes['c-book__info-container']}>
            <strong className={classes['c-book__title']}>{book.title}</strong>
            <span className={classes['c-book__author']}>{book.author}</span>
            <span className={classes['c-book__description']}>{book.description}</span>
            {isAdmin ? (
              <span className={classes['c-book__num-of-copies']}>
                Number of Copies: {book.numOfCopies}
              </span>
            ) : null}
          </div>
          <div className={classes['c-book__tools']}>
            {isAdmin ? (
              <>
                <Button content="Edit" onClick={() => setModify(true)} />
                <Button content="Delete" onClick={() => deleteBook()} />
              </>
            ) : (
              <Button content="Rent" />
            )}
          </div>
        </div>
      ) : (
        <div className={classes['c-book__modify-container']}>
          <BookDialog
            id={book.id}
            title={book.title}
            author={book.author}
            description={book.description}
            imagePath={book.imagePath}
            numOfCopies={book.numOfCopies}
          />
          <Button content="Cancel" onClick={() => setModify(false)} />
        </div>
      )}
    </div>
  );
};

export default Book;
