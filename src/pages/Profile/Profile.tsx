import React from 'react';
import ProfileInfo from 'components/ProfileInfo/ProfileInfo';
import RentalsOverview from 'components/RentalsOverview/RentalsOverview';
import classes from './Profile.module.scss';

const Profile = () => {
  return (
    <div className={classes['c-profile']}>
      <ProfileInfo />
      <RentalsOverview componentType="current" />
      <RentalsOverview componentType="history" />
    </div>
  );
};

export default Profile;
