import StandardLayout from 'components/Layout/StandardLayout';
import Profile from 'components/Profile/Profile';
import React from 'react';

const ProfilePage: React.FC = () => {
  return (
    <StandardLayout>
      <Profile />
    </StandardLayout>
  );
};

export default ProfilePage;
