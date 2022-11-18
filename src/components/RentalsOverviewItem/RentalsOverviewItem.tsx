import Button from 'components/core/Button/Button';
import RentalModel from 'models/RentalModel';
import React, { useState } from 'react';
import rentalsService from 'services/rentalsService';
import tokenService from 'services/tokenService';
import classes from './RentalsOverviewItem.module.scss';

interface RentalsOverviewItemProps {
  item: RentalModel;
}

const RentalsOverviewItem = ({
  item: { id, title, startRentDate, endRentDate, userEmail }
}: RentalsOverviewItemProps) => {
  const [additionalRentPeriod, setAdditionalRentPeriod] = useState<number>(0);
  const isAdmin = tokenService.isRoleAdmin();
  const { updateExtendRental, updateCloseRental } = rentalsService;

  const handleRentPeriod = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdditionalRentPeriod(parseInt(event.target.value));
  };

  const extendRent = async () => {
    await updateExtendRental(id, additionalRentPeriod);
  };

  const closeRent = async () => {
    await updateCloseRental(id);
  };

  return (
    <div className={classes['c-rentals-overview-item']}>
      <div
        className={`${classes['c-rentals-overview-item__info-container']} ${
          isAdmin
            ? classes['c-rentals-overview-item__info-container-admin']
            : classes['c-rentals-overview-item__info-container-user']
        }`}
      >
        <span>{title}</span>
        <span>{startRentDate}</span>
        <span>{endRentDate}</span>
        {isAdmin ? (
          <>
            <span>{userEmail}</span>
            <input
              className={classes['c-rentals-overview-item__input']}
              name="rentPeriod"
              onChange={handleRentPeriod}
              type="number"
            ></input>
            <Button content={'Extend rent'} onClick={extendRent} disabled={!additionalRentPeriod} />
            <Button content={'Close rent'} onClick={closeRent} />
          </>
        ) : null}
      </div>
      <div className={classes['c-rentals-overview-item__bottom-line']} />
    </div>
  );
};

export default RentalsOverviewItem;
