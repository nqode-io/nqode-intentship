import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={classes['c-navbar']}>
      <div className={classes['c-navbar--left']}>
        <Link to={`/booksoverview`} className={classes['c-navbar__link']}>
          Books Overview
        </Link>
        <Link to="" className={classes['c-navbar__link']}>
          Profile
        </Link>
        <Link to="" className={classes['c-navbar__link']}>
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
