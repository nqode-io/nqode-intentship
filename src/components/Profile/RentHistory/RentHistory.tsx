import React from 'react';
import RentedBookCopy from 'model/RentedBookCopy';
import classes from './RentHistory.module.scss';
import RentedBookCard from '../RentedBookCard/RentedBookCard';

interface RentHistoryProps {
  rentHistory: RentedBookCopy[];
}

const RentHistory: React.FC<RentHistoryProps> = ({ rentHistory }) => {
  return (
    <div className={classes['c-rented-books']}>
      <h1 className={classes['c-rented-books__title']}>Rent history</h1>
      <div className={classes['c-rented-books__books']}>
        {rentHistory.length ? (
          rentHistory.map((book, i) => {
            return (
              <RentedBookCard
                history={true}
                id={book.id}
                userId={book.userId}
                bookCopyId={book.bookCopyId}
                startRentDate={book.startRentDate}
                endRentDate={book.endRentDate}
                cancelRentDate={book.cancelRentDate}
              />
            );
          })
        ) : (
          <div>Your history is empty!</div>
        )}
      </div>
    </div>
  );
};

export default RentHistory;
