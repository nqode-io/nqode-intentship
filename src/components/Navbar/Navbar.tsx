import React, { useContext } from 'react';
import { RoleContext } from 'contexts/roleContext';
import { Link } from 'react-router-dom';
import { isRoleAdmin, isRoleUser, getUserId } from 'services/tokenService';
import classes from './Navbar.module.scss';

const Navbar = () => {
  const id = getUserId();
  const { setRole } = useContext(RoleContext);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setRole('');
  };

  const renderAdminLinks = () => {
    return (
      <>
        <Link to="/dashboard" className={classes['c-navbar__link']}>
          Overview
        </Link>
        <Link to="#" className={classes['c-navbar__link']}>
          Users
        </Link>
      </>
    );
  };

  return (
    <div className={classes['c-navbar']}>
      <div>
        <Link to={`/booksoverview`} className={classes['c-navbar__link']}>
          Books
        </Link>
        {isRoleUser() && (
          <Link to={`profile/${id}`} className={classes['c-navbar__link']}>
            Profile
          </Link>
        )}
        {isRoleAdmin() && renderAdminLinks()}
      </div>
      <div>
        <Link to="/" className={classes['c-navbar__link']} onClick={handleLogout}>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
