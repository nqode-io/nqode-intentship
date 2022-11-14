import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import classes from './UserAbout.module.scss';

interface UserAboutProps {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phoneNumber: string;
}

const UserAbout: React.FC<UserAboutProps> = ({
  firstName,
  lastName,
  email,
  address,
  phoneNumber
}) => {
  return (
    <div className={classes['c-user-profile-about']}>
      <h1 className={classes['c-user-profile-about__title']}>Welcome to your profile</h1>
      <div className={classes['c-user-profile-about__one-info']}>
        {firstName} {lastName}
      </div>
      <div className={classes['c-user-profile-about__one-info']}>
        <FontAwesomeIcon icon={faEnvelope} /> {email}
      </div>
      <div className={classes['c-user-profile-about__one-info']}>
        <FontAwesomeIcon icon={faPhone} /> {phoneNumber}
      </div>
      <div className={classes['c-user-profile-about__one-info']}>
        <FontAwesomeIcon icon={faLocationDot} /> {address}
      </div>
    </div>
  );
};

export default UserAbout;
