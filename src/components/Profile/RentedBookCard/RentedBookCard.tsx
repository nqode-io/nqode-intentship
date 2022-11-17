import React from 'react';
import RentedBookCopy from 'model/RentedBookCopy';
import classes from './RentedBookCard.module.scss';
import RentedBookCopyOverview from 'model/RentedBookCopyOverview';

interface RentedBookCardProps {
  history?: boolean;
  book: RentedBookCopyOverview;
}

const RentedBookCard: React.FC<RentedBookCardProps> = ({ book, history }) => {
  return (
    <div
      className={
        history
          ? `${classes['c-rented-book-card']} ${classes['c-rented-book-card--secondary']}`
          : `${classes['c-rented-book-card']}`
      }
    >
      <div>Rent id: {book.id}</div>
      <div>Book copy id: {book.identifier}</div>
      <div>Book title: {book.title}</div>
      <div>Book author: {book.author}</div>
      <div>From: {book.startRentDate}</div>
      <div>To: {book.endRentDate}</div>
    </div>
  );
};

export default RentedBookCard;
