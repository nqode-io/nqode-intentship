import { UserContext } from 'contexts/userContext';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import tokenService from 'services/tokenService';
import classes from './Navbar.module.scss';

const Navbar = () => {
  const isUser = tokenService.isRoleUser();
  const isAdmin = tokenService.isRoleAdmin();
  const { getUserId } = tokenService;
  const id = getUserId();
  const { role, setRole } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setRole('');
  };

  return (
    <div className={classes['c-navbar']}>
      {role !== '' ? (
        <>
          <div className={classes['c-navbar--left']}>
            <Link to={`/booksoverview`} className={classes['c-navbar__link']}>
              Books
            </Link>
            {isUser ? (
              <Link to={`profile/${id}`} className={classes['c-navbar__link']}>
                Profile
              </Link>
            ) : null}
            {isAdmin ? (
              <>
                <Link to="/dashboard" className={classes['c-navbar__link']}>
                  Overview
                </Link>
                <Link to="#" className={classes['c-navbar__link']}>
                  Users
                </Link>
              </>
            ) : null}
          </div>
          <div className={classes['c-navbar--right']}>
            <Link to="/" className={classes['c-navbar__link']} onClick={handleLogout}>
              Logout
            </Link>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Navbar;
