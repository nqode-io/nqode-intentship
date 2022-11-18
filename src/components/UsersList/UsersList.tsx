import UserModel from 'models/UserModel';
import React, { useEffect, useState } from 'react';
import userService from 'services/userService';
import classes from './UsersList.module.scss';

interface Pagable {
  current?: boolean;
  page: number;
  size: number;
  sort: 'asc' | 'desc';
}

const UsersList = () => {
  const [users, setUsers] = useState<UserModel>({} as UserModel);
  const { getUsers } = userService;

  const retriveUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    retriveUsers();
  }, []);

  return <div></div>;
};

export default UsersList;
