import axios from 'axios';
import Button from 'components/core/Button/Button';
import Input from 'components/core/Input/Input';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthService from 'services/AuthService';
import classes from './Login.module.scss';

const backend_url = process.env.REACT_APP_BACKEND_URL;

const Login: React.FC = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [inputError, setInputError] = useState(false);

  const changeEmailHandler = (value: string): void => {
    setLoginData((prevLoginData) => ({ ...prevLoginData, email: value }));
  };

  const changePasswordHandler = (value: string): void => {
    setLoginData((prevLoginData) => ({ ...prevLoginData, password: value }));
  };

  const submitLoginHandler = (): void => {
    axios.post(backend_url + '/authenticate', loginData).then((response) => {
      if (response.status === 200) {
        localStorage.setItem('token', response.data.accessToken);
        AuthService.getRoleFromJwt();
        return alert('Welcome.');
      }
      setInputError(true);
    });
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
            id="email"
            name="email"
            placeholder="email..."
            type="text"
            label="Email"
            setValue={changeEmailHandler}
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
