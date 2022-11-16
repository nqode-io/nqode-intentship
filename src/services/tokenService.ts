import jwt_decode from 'jwt-decode';
import TokenData from 'models/TokenModel';

const getDecodedToken = (): TokenData | null => {
  const token: string | null = localStorage.getItem('token');
  return token ? jwt_decode(token) : null;
};

const getRole = () => {
  const decoded = getDecodedToken();
  return decoded ? decoded.userRole : null;
};

const isRoleAdmin = () => {
  const role = getRole();
  return role === 'ADMINISTRATOR' ? true : false;
};

const isRoleUser = () => {
  const role = getRole();
  console.log(role);
  return role === 'USER' ? true : false;
};

const getUserId = () => {
  const decoded = getDecodedToken();
  return decoded ? decoded.userId : null;
};

const tokenService = { isRoleAdmin, isRoleUser, getUserId };

export default tokenService;
