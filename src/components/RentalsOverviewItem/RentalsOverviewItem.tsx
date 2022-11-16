import RentalModel from 'models/RentalModel';
import classes from './RentalsOverviewItem.module.scss';

interface RentalsOverviewItemProps {
  item: RentalModel;
}

const RentalsOverviewItem = ({ item }: RentalsOverviewItemProps) => {
  return (
    <div className={classes['c-rentals-overview-item']}>
      <div className={classes['c-rentals-overview-item__info-container']}>
        <span>{item.title}</span>
        <span>{item.startRentDate}</span>
        <span>{item.endRentDate}</span>
      </div>
      <hr className={classes['c-rentals-overview-item__bottom-line']} />
    </div>
  );
};

export default RentalsOverviewItem;
