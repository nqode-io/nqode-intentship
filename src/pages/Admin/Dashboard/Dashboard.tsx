import BooksList from 'components/BooksList/BooksList';
import React from 'react';

const Dashboard = () => {
  return (
    <div>
      Rented books:
      <BooksList filter="rented-current" />
    </div>
  );
};

export default Dashboard;
