import React from 'react';
import { useState } from 'react';
import classes from './Login.module.scss';
import Input from '../core/Input/Input';
import Button from '../core/Button/Button';

interface Credentials {
  username: string;
  password: string;
}

const Login = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    username: '',
    password: ''
  });

  const handleLogin = () => {
    //login logic
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({ ...prev, [event.target.name]: event.target.value }));

    console.log('username: ' + credentials.username + ' password: ' + credentials.password);
  };

  return (
    <div className={classes['c-login']}>
      <div className={classes['c-login__container']}>
        <div className={classes['-login__container__span--container']}>
          <span className={classes['c-login__container__span']}>Username</span>
          <Input name="username" action={handleChange}></Input>
        </div>
        <div className={classes['-login__container__span--container']}>
          <span className={classes['c-login__container__span']}>Password</span>
          <Input name="password" action={handleChange}></Input>
        </div>
        <div className={classes['c-login__container__button-container']}>
          <Button content="Log in" action={handleLogin}></Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
