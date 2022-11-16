import React from 'react';
import ProfileInfo from 'components/ProfileInfo/ProfileInfo';
import RentalsOverview from 'components/RentalsOverview/RentalsOverview';

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <RentalsOverview componentType="current" />
      <RentalsOverview componentType="history" />
    </div>
  );
};

export default Profile;
