import Button from 'components/core/Button/Button';
import Input from 'components/core/Input/Input';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Login.module.scss';

const Login: React.FC = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [inputError, setInputError] = useState(false);

  const changeUsernameHandler = (value: string): void => {
    setLoginData((prevLoginData) => ({ ...prevLoginData, username: value }));
  };

  const changePasswordHandler = (value: string): void => {
    setLoginData((prevLoginData) => ({ ...prevLoginData, password: value }));
  };

  const submitLoginHandler = (): void => {
    console.log(loginData);
    if (loginData.username === '123' && loginData.password === '123')
      return alert('Successfully loged.');
    setInputError(true);
  };

  return (
    <div className={classes['c-login']}>
      <div className={classes['c-login__about']}>
        <div className={classes['c-login__about-logo']}>nQode</div>
        <div className={classes['c-login__about-moto']}>
          Empowering your business by delivering <strong>outstanding</strong> software solutions
        </div>
      </div>
      <div className={classes['c-login__info']}>
        <h1>Login</h1>
        <div className={classes['c-login__form']}>
          <Input
            id="username"
            name="username"
            placeholder="username..."
            type="text"
            label="Username"
            setValue={changeUsernameHandler}
          />
          <Input
            id="password"
            name="password"
            placeholder="password..."
            type="password"
            label="Password"
            setValue={changePasswordHandler}
          />
        </div>
        <Button name="Login" clickHandler={submitLoginHandler}></Button>
        {inputError ? (
          <div className={classes['c-login__error-message']}>
            Ups... Wrong password or username.
          </div>
        ) : null}
        <div className={classes['c-login__register-info']}>
          Don't have an account yet? <Link to="#">Register now.</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
