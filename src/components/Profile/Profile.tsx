import React, { useState, useEffect } from 'react';
import RentedBookCopyOverview from 'model/RentedBookCopyOverview';
import authService from 'services/authService';
import CurrentlyRentedBooks from './CurrentlyRentedBooks/CurrentlyRentedBooks';
import classes from './Profile.module.scss';
import RentHistory from './RentHistory/RentHistory';
import UserAbout from './UserAbout/UserAbout';
import axios from '../../axios/axiosConfig';

interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<User>({} as User);
  const [currentlyRented, setCurrentlyRented] = useState<RentedBookCopyOverview[]>([]);
  const [rentHistory, setRentHistory] = useState<RentedBookCopyOverview[]>([]);

  const userId = authService.getIdFromJwt();

  const getUser = () => {
    axios
      .get(`/user/${userId}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getCurrentlyRentedBooks = () => {
    axios.get(`/rent/user/${userId}?current=true`).then((res) => {
      setCurrentlyRented(res.data.content);
    });
  };

  const getRentHistory = () => {
    axios.get(`/rent/user/${userId}?current=false`).then((res) => {
      setRentHistory(res.data.content);
    });
  };

  useEffect(() => {
    getUser();
    getCurrentlyRentedBooks();
    getRentHistory();
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
      <CurrentlyRentedBooks currentlyRentedBooks={currentlyRented} />
      <hr />
      <RentHistory rentHistory={rentHistory} />
    </div>
  );
};

export default Profile;
