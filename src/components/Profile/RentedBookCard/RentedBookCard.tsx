import React from 'react';
import RentedBookCopy from 'model/RentedBookCopy';
import classes from './RentedBookCard.module.scss';

interface RentedBookCardProps {
  history?: boolean;
  id: number;
  userId: number;
  bookCopyId: number;
  startRentDate: string;
  endRentDate: string;
  cancelRentDate: null;
}

const RentedBookCard: React.FC<RentedBookCardProps> = ({
  id,
  userId,
  bookCopyId,
  startRentDate,
  endRentDate,
  cancelRentDate,
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
      <div>Book copy: {bookCopyId}</div>
      <div>From: {startRentDate}</div>
      <div>To: {endRentDate}</div>
    </div>
  );
};

export default RentedBookCard;
