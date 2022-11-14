import axios from 'axios';
import RentedBookCopy from 'model/RentedBookCopy';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import authService from 'services/authService';
import classes from './Profile.module.scss';
import UserAbout from './UserAbout';

interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
}

const backend_url = process.env.REACT_APP_BACKEND_URL;

const Profile: React.FC = () => {
  const [user, setUser] = useState<User>({} as User);
  const [currentlyRented, setCurrentlyRented] = useState<RentedBookCopy[]>([]);

  const userId = authService.getIdFromJwt();

  const getUser = () => {
    axios
      .get(`${backend_url}/user/${userId}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getCurrentlyRentedBooks = () => {
    axios.get(`${backend_url}/rent/user/${userId}`).then();
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className={classes['c-user-profile']}>
      <UserAbout
        firstName={user.firstName}
        lastName={user.lastName}
        email={user.email}
        address={user.address}
        phoneNumber={user.phoneNumber}
      />
      <hr />
      <div>
        <h1>Currently renting</h1>
      </div>
    </div>
  );
};

export default Profile;
