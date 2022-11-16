import axios from 'axios';
import React, { useEffect, useState } from 'react';
import tokenService from 'services/tokenService';
import classes from './ProfileInfo.module.scss';

interface UserData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
}

const ProfileInfo = () => {
  const [user, setUser] = useState<UserData>();
  const { getUserId } = tokenService;
  const id = getUserId();

  const retriveUser = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/user/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    setUser(response.data);
  };

  useEffect(() => {
    retriveUser();
  }, []);

  return (
    <div className={classes['c-profile-info']}>
      <div
        className={`${classes['c-profile-info__info-container']} ${classes['c-profile-info__info-container--primary']}`}
      >
        <strong>
          {user?.firstName} {user?.lastName}
        </strong>
      </div>
      <div
        className={`${classes['c-profile-info__info-container']} ${classes['c-profile-info__info-container--secondary']}`}
      >
        <span>{user?.address}</span>
        <span>{user?.phoneNumber}</span>
      </div>
    </div>
  );
};

export default ProfileInfo;
