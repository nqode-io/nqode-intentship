import React from 'react';
import User from './User/User';
import classes from './Users.module.scss';

const Users: React.FC = () => {
  return (
    <div className={classes['c-users']}>
      <div className={classes['c-users__table-head']}>
        <div>ID</div>
        <div>Username</div>
        <div>Phone number</div>
      </div>
      <User />
      <User />
      <User />
    </div>
  );
};

export default Users;
