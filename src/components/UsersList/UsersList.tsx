import React, { useEffect, useState } from 'react';
import UsersListItem from 'components/UsersListItem/UsersListItem';
import UserModel from 'models/UserModel';
import { getUsers } from 'services/userService';
import classes from './UsersList.module.scss';

interface Pagable {
  current?: boolean;
  page: number;
  size: number;
  sort: 'asc' | 'desc';
}

const UsersList = () => {
  const [users, setUsers] = useState<UserModel[]>([]);

  const retriveUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    retriveUsers();
  }, []);

  return (
    <div className={classes['c-users-list']}>
      <div className={classes['c-users-list__headers']}>
        <span>Email</span>
        <span>First name</span>
        <span>Last name</span>
        <span>Address</span>
        <span>Phone number</span>
      </div>
      <div className={classes['c-users-list__list-container']}>
        {users.map((item) => (
          <UsersListItem
            key={item.id}
            id={item.id}
            email={item.email}
            firstName={item.firstName}
            lastName={item.lastName}
            address={item.address}
            phoneNumber={item.phoneNumber}
          />
        ))}
      </div>
    </div>
  );
};

export default UsersList;
