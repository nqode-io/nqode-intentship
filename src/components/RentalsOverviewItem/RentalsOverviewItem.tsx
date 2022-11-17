import RentalModel from 'models/RentalModel';
import classes from './RentalsOverviewItem.module.scss';

interface RentalsOverviewItemProps {
  item: RentalModel;
}

const RentalsOverviewItem = ({
  item: { title, startRentDate, endRentDate }
}: RentalsOverviewItemProps) => {
  return (
    <div className={classes['c-rentals-overview-item']}>
      <div className={classes['c-rentals-overview-item__info-container']}>
        <span>{title}</span>
        <span>{startRentDate}</span>
        <span>{endRentDate}</span>
      </div>
      <div className={classes['c-rentals-overview-item__bottom-line']} />
    </div>
  );
};

export default RentalsOverviewItem;
