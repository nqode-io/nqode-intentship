import RentalOverviewItem from 'components/RentalsOverviewItem/RentalsOverviewItem';
import RentalModel from 'models/RentalModel';
import React, { useEffect, useState } from 'react';
import classes from './RentalsOverview.module.scss';
import rentalsService from 'services/rentalsService';
import tokenService from 'services/tokenService';
import { useLocation } from 'react-router-dom';

interface RentalsOverviewProps {
  componentType: 'current' | 'history';
}

const RentalsOverview = ({ componentType }: RentalsOverviewProps) => {
  const [rentals, setRentals] = useState<RentalModel[]>([]);
  const { getRentals, getRentalsByUser } = rentalsService;
  const { isRoleAdmin } = tokenService;
  const isAdmin = isRoleAdmin();

  const location = useLocation();
  const userId: number = parseInt(location.pathname.split('/')[2]);

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

    const data = isAdmin ? await getRentalsByUser(userId, params) : await getRentals(params);
    setRentals(data);
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
      <div className={classes['c-rentals-overview__list-container']}>
        {rentals.map((item) => (
          <RentalOverviewItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default RentalsOverview;
