import React from 'react';
import RentedBookCopy from 'model/RentedBookCopy';
import classes from './CurrentlyRentedBooks.module.scss';
import RentedBookCard from '../RentedBookCard/RentedBookCard';

interface CurrentlyRentedBooksProps {
  currentlyRentedBooks: RentedBookCopy[];
}

const CurrentlyRentedBooks: React.FC<CurrentlyRentedBooksProps> = ({ currentlyRentedBooks }) => {
  return (
    <div className={classes['c-rented-books']}>
      <h1 className={classes['c-rented-books__title']}>Currently rented books</h1>
      <div className={classes['c-rented-books__books']}>
        {currentlyRentedBooks.length == 0 ? (
          <div>You don't have any rented books!</div>
        ) : (
          currentlyRentedBooks.map((book, i) => {
            return (
              <RentedBookCard
                id={book.id}
                userId={book.userId}
                bookCopyId={book.bookCopyId}
                startRentDate={book.startRentDate}
                endRentDate={book.endRentDate}
                cancelRentDate={book.cancelRentDate}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default CurrentlyRentedBooks;
