import React, { useEffect, useState } from 'react';
import BookListItem from 'components/BookListItem/BookListItem';
import classes from './BooksList.module.scss';
import axios from 'axios';
import BookModel from 'models/BookModel';
import Button from 'components/core/Button/Button';
import BookDialog from 'components/BookDialog/BookDialog';
import { isRoleAdmin } from 'services/tokenService';

interface Pagable {
  current?: boolean;
  page: number;
  size: number;
  sort: 'asc' | 'desc';
}

const BooksList = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [addBook, setAddBook] = useState<boolean>(false);

  const retriveBooks = async () => {
    let url = `${process.env.REACT_APP_BASE_URL}/book`;
    const params: Pagable = {
      page: 0,
      size: 8,
      sort: 'asc'
    };

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      params
    });

    setBooks(response.data.content);
  };

  const renderAdminOptions = () => {
    return (
      <>
        {addBook ? (
          <div className={classes['c-books-list__dialog-container']}>
            <BookDialog
              componentType={'new'}
              oldBook={{
                id: 0,
                title: '',
                author: '',
                description: '',
                imagePath: 'file/somewhere',
                numOfCopies: 0
              }}
            />
            <Button content={'Cancel'} onClick={() => setAddBook(false)} />
          </div>
        ) : (
          <div className={classes['c-books-list__button-container']}>
            <Button content={'Add new book'} onClick={() => setAddBook(true)} />
          </div>
        )}
      </>
    );
  };

  useEffect(() => {
    retriveBooks();
  }, []);

  return (
    <div className={classes['c-books-list']}>
      {isRoleAdmin() && renderAdminOptions()}
      <div className={classes['c-books-list__items-container']}>
        {books.map((item) => (
          <BookListItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default BooksList;
