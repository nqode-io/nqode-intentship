import BooksList from 'components/BooksList/BooksList';
import React from 'react';

const Dashboard = () => {
  return (
    <div>
      Rented books:
      <BooksList componentType="rented" />
    </div>
  );
};

export default Dashboard;
