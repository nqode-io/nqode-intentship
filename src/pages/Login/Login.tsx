import React, { useContext } from 'react';
import { useState } from 'react';
import classes from './Login.module.scss';
import Button from 'components/core/Button/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import InputContainer from 'components/core/InputContainer/InputContainer';
import { UserContext } from 'contexts/userContext';
import tokenService from 'services/tokenService';

interface CredentialsForm {
  username: string;
  password: string;
}

const Login = () => {
  const [credentials, setCredentials] = useState<CredentialsForm>({
    username: '',
    password: ''
  });
  const { getRole } = tokenService;
  const { setRole } = useContext(UserContext);
  const navigate = useNavigate();

  const handleToken = (token: string) => {
    localStorage.setItem('token', token);
    setRole(getRole());
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
        <InputContainer name="username" onChange={handleChange} label="Username" />
        <InputContainer name="password" onChange={handleChange} label="Password" type="password" />
        <div className={classes['c-login__button-container']}>
          <Button content="Log in" onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
