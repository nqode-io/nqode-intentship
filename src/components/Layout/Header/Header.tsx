import React from 'react'
import classes from './Header.module.scss'

const Header = () => {
  return (
    <header className={classes['c-header']}>
      <div className={classes['c-header__logo']}>
        nQode
      </div>
      <nav className={classes['c-header__nav']}>
        <ul className={classes['c-header__nav-links']}>
          <li className={classes['c-header__nav-link']}>Home</li>
          <li className={classes['c-header__nav-link']}>Favourite</li>
          <li className={classes['c-header__nav-link']}>Sales</li>
          <li className={classes['c-header__nav-link']}>My books</li>
          <li className={classes['c-header__nav-link']}>Profile</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
