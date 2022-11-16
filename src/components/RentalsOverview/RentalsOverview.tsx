import axiosInstance from 'customAxios/customAxios';
import RentalOverviewItem from 'components/RentalsOverviewItem/RentalsOverviewItem';
import RentalModel from 'models/RentalModel';
import React, { useEffect, useState } from 'react';
import classes from './RentalsOverview.module.scss';

interface RentalsOverviewProps {
  componentType: 'current' | 'history';
}

const RentalsOverview = ({ componentType }: RentalsOverviewProps) => {
  const [rentals, setRentals] = useState<RentalModel[]>([]);

  const params = {
    current: true,
    page: 0,
    size: 5,
    sort: 'asc'
  };

  const retriveRentals = async () => {
    if (componentType === 'history') {
      params.current = false;
    }

    const response = await axiosInstance.get('/rent/book', {
      params,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    setRentals(response.data.content);
  };

  useEffect(() => {
    retriveRentals();
  }, []);

  return (
    <div className={classes['c-rentals-overview']}>
      <div className={classes['c-rentals-overview__headers']}>
        <span>Book</span>
        <span>Start date</span>
        <span>End date</span>
      </div>
      {rentals.map((item) => (
        <RentalOverviewItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default RentalsOverview;
