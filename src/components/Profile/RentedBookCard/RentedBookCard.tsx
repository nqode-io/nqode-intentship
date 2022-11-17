import React from 'react';
import RentedBookCopy from 'model/RentedBookCopy';
import classes from './RentedBookCard.module.scss';
import RentedBookCopyOverview from 'model/RentedBookCopyOverview';

interface RentedBookCardProps {
  history?: boolean;
  book: RentedBookCopyOverview;
}

const RentedBookCard: React.FC<RentedBookCardProps> = ({
  book: { id, identifier, title, author, startRentDate, endRentDate },
  history
}) => {
  return (
    <div
      className={
        history
          ? `${classes['c-rented-book-card']} ${classes['c-rented-book-card--secondary']}`
          : `${classes['c-rented-book-card']}`
      }
    >
      <div>Rent id: {id}</div>
      <div>Book copy id: {identifier}</div>
      <div>Book title: {title}</div>
      <div>Book author: {author}</div>
      <div>From: {startRentDate}</div>
      <div>To: {endRentDate}</div>
    </div>
  );
};

export default RentedBookCard;
