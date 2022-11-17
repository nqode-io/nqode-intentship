import React from 'react';
import { Link } from 'react-router-dom';
import tokenService from 'services/tokenService';
import classes from './Navbar.module.scss';

const Navbar = () => {
  const isUser = tokenService.isRoleUser();
  const isAdmin = tokenService.isRoleAdmin();
  const { getUserId } = tokenService;
  const id = getUserId();

  return (
    <div className={classes['c-navbar']}>
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
    </div>
  );
};

export default Navbar;
