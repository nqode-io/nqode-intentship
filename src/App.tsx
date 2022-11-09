import Login from './components/Login/Login';
import React from 'react';
import classes from './App.module.scss';

const App = () => {
  return (
    <div className={classes['c-app']}>
      <Login />
    </div>
  );
};

export default App;
