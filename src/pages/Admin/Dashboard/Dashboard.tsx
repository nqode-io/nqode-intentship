import RentalsOverview from 'components/RentalsOverview/RentalsOverview';
import React from 'react';
import classes from './Dashboard.module.scss';

const Dashboard = () => {
  return (
    <div className={classes['c-dashboard']}>
      <h1 className={classes['c-dashboard__headline']}>Rented books</h1>
      <RentalsOverview componentType="current" />
    </div>
  );
};

export default Dashboard;
