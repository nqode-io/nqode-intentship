import Button from 'components/core/Button/Button';
import ProfileInfoDialog from 'components/ProfileInfoDialog/ProfileInfoDialog';
import UserModel from 'models/UserModel';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import tokenService from 'services/tokenService';
import userService from 'services/userService';
import classes from './ProfileInfo.module.scss';

const ProfileInfo = () => {
  const [user, setUser] = useState<UserModel>({} as UserModel);
  const location = useLocation();
  const id: number = parseInt(location.pathname.split('/')[2]);
  const [modify, setModify] = useState<Boolean>(false);
  const { isRoleAdmin } = tokenService;
  const isAdmin = isRoleAdmin();
  const { getUserById } = userService;
  const { deleteUser } = userService;
  const navigate = useNavigate();

  const retriveUser = async () => {
    const data = await getUserById(id);
    setUser(data);
  };

  const handleDelete = async () => {
    await deleteUser(id);
    navigate('/dashboard');
  };

  useEffect(() => {
    retriveUser();
  }, []);

  return (
    <div className={classes['c-profile-info']}>
      {!modify ? (
        <div>
          <div
            className={`${classes['c-profile-info__info-container']} ${classes['c-profile-info__info-container--heading']}`}
          >
            <span>
              {user.firstName} {user.lastName}
            </span>
          </div>
          <div
            className={`${classes['c-profile-info__info-container']} ${classes['c-profile-info__info-container--regular']}`}
          >
            <span>{user.address}</span>
            <span>{user.phoneNumber}</span>
          </div>
          <div className={classes['c-profile-info__button-container']}>
            {isAdmin ? (
              <>
                <Button content={'Edit user'} onClick={() => setModify(true)}></Button>
                <Button content={'Delete user'} onClick={handleDelete}></Button>
              </>
            ) : null}
          </div>
        </div>
      ) : (
        <div className={classes['c-profile-info__modify-container']}>
          <ProfileInfoDialog
            id={user.id}
            email={user.email}
            firstName={user.firstName}
            lastName={user.lastName}
            address={user.address}
            phoneNumber={user.phoneNumber}
          />
          <Button content="Cancel" onClick={() => setModify(false)} />
        </div>
      )}
    </div>
  );
};

export default ProfileInfo;
