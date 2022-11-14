import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import classes from './Profile.module.scss';

const Profile: React.FC = () => {
  return (
    <div className={classes['c-user-profile']}>
      <div className={classes['c-user-profile__about']}>
        <h1 className={classes['c-user-profile__title']}>User info</h1>
        <div>Aleksa Alfirovic</div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} /> aleksa@gmail.com
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} /> 065555000
        </div>
        <div>
          <FontAwesomeIcon icon={faLocationDot} /> Adresa
        </div>
      </div>
    </div>
  );
};

export default Profile;
