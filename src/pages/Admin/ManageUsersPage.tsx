import StandardLayout from 'components/Layout/StandardLayout';
import Users from 'components/Users/Users';
import React from 'react';

const ManageUsersPage: React.FC = () => {
  return (
    <StandardLayout>
      <Users />
    </StandardLayout>
  );
};

export default ManageUsersPage;
