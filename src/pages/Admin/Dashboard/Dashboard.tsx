import React from 'react';
import BooksList from 'components/BooksList/BooksList';

const Dashboard = () => {
  return (
    <div>
      Rented books:
      <BooksList componentType="rented" />
    </div>
  );
};

export default Dashboard;
