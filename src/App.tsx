import React from 'react';
import classes from './App.module.scss';
import StandardLayout from './components/Layout/StandardLayout';

const App = () => {
  return (
    <StandardLayout/>
    // <div className={classes['c-app']}>
    //   BEM example:
    //   <button className={classes['c-app__button']}>Button primary</button>
    //   <button className={`${classes['c-app__button']} ${classes['c-app__button--secondary']}`}>
    //     Button secondary
    //   </button>
    // </div>
  );
};

export default App;