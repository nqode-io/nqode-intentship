import React, { useEffect, useState } from 'react';
import Button from 'components/core/Button/Button';
import ProfileInfoDialog from 'components/ProfileInfoDialog/ProfileInfoDialog';
import UserModel from 'models/UserModel';
import { useNavigate, useParams } from 'react-router-dom';
import { isRoleAdmin } from 'services/tokenService';
import { getUserById, deleteUser } from 'services/userService';
import classes from './ProfileInfo.module.scss';

const ProfileInfo = () => {
  const [user, setUser] = useState<UserModel>({} as UserModel);
  const [modify, setModify] = useState<Boolean>(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const retriveUser = async () => {
    const data = await getUserById(Number(id));
    setUser(data);
  };

  const handleDelete = async () => {
    await deleteUser(Number(id));
    navigate('/dashboard');
  };

  useEffect(() => {
    retriveUser();
  }, []);

  return (
    <div className={classes['c-profile-info']}>
      {modify ? (
        <div className={classes['c-profile-info__modify-container']}>
          <ProfileInfoDialog oldUser={user} componentType={'modify'} />
          <Button content="Cancel" onClick={() => setModify(false)} />
        </div>
      ) : (
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
            {isRoleAdmin() && (
              <>
                <Button content={'Edit user'} onClick={() => setModify(true)}></Button>
                <Button content={'Delete user'} onClick={handleDelete}></Button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileInfo;
