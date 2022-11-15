import React from 'react';
import { useState } from 'react';
import classes from './Login.module.scss';
import Button from 'components/core/Button/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import InputContainer from 'components/core/InputContainer/InputContainer';

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

  const getRole = (token: string) => {
    var decoded = jwt_decode(token);
  };

  const handleToken = (token: string) => {
    localStorage.setItem('token', token);
    getRole(token);
  };

  const handleLogin = async () => {
    await axios
      .post(`${process.env.REACT_APP_BASE_URL}/authenticate`, {
        email: credentials.username,
        password: credentials.password
      })
      .then((response) => {
        handleToken(response.data.accessToken);
        navigate('/booksoverview');
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <div className={classes['c-login']}>
      <div className={classes['c-login__container']}>
        <InputContainer onChange={handleChange} label="Username" />
        <InputContainer onChange={handleChange} label="Password" type="password" />
        <div className={classes['c-login__button-container']}>
          <Button content="Log in" onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
