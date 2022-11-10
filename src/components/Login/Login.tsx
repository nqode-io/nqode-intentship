import React from 'react';
import { useState } from 'react';
import classes from './Login.module.scss';
import Input from '../core/Input/Input';
import Button from '../core/Button/Button';
import { useNavigate } from 'react-router-dom';

interface CredentialsForm {
  username: string;
  password: string;
}

const Login = () => {
  const [credentials, setCredentials] = useState<CredentialsForm>({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/booksoverview');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <div className={classes['c-login']}>
      <div className={classes['c-login__container']}>
        <div className={classes['c-login__input-container']}>
          <label className={classes['c-login__input-label']}>Username</label>
          <Input name="username" onChange={handleChange}></Input>
        </div>
        <div className={classes['c-login__input-container']}>
          <label className={classes['c-login__input-label']}>Password</label>
          <Input name="password" onChange={handleChange}></Input>
        </div>
        <div className={classes['c-login__button-container']}>
          <Button content="Log in" onClick={handleLogin}></Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
