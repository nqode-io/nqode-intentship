import React, { useState, useEffect } from 'react';
import classes from './Users.module.scss';
import axios from '../../axios/axiosConfig';
import User from './User/User';
import UserModel from 'model/UserModel';
import { ToastContainer, toast } from 'react-toastify';
import toastService from 'services/toastService';

const Users: React.FC = () => {
  const [users, setUsers] = useState<UserModel[]>([]);

  const getUsers = (): void => {
    axios.get(`/user`).then((res) => {
      setUsers(res.data.content);
    });
  };

  const editUser = (id: number | string, user: UserModel): void => {
    axios
      .put(`/user/${id}`, user)
      .then(() => {
        toastService.toastSuccess(`User with ID: ${id} updated!`);
      })
      .catch((err) => {
        toastService.toastError(`${err.response.data.message}`);
      });
  };

  const deleteUser = (id: number | string): void => {
    axios
      .delete(`/user/${id}`)
      .then(() => {
        toastService.toastSuccess(`User with ID: ${id} deleted!`);
      })
      .catch((err) => {
        toastService.toastError(`${err.response.data.message}`);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className={classes['c-users']}>
      <div className={classes['c-users__table-head']}>
        <div>ID</div>
        <div>Email</div>
        <div>Phone number</div>
      </div>
      {users.length ? (
        users.map((user, index) => {
          return <User key={index} user={user} editUser={editUser} deleteUser={deleteUser} />;
        })
      ) : (
        <div>There are no users!</div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Users;
