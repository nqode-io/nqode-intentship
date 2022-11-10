import jwtDecode from 'jwt-decode';

interface TokenData {
  aud: string;
  email: string;
  exp: number;
  iss: string;
  sub: string;
  userId: number;
  userRole: string;
}

const getDecodedJwt = (): TokenData | null => {
  const token: string | null = localStorage.getItem('token');
  return token ? jwtDecode(token) : null;
};

const getRoleFromJwt = (): string => {
  const decodedJwt = getDecodedJwt();
  return decodedJwt ? decodedJwt.userRole : '';
};

const isAdministrator = (): boolean => {
  return getRoleFromJwt() === 'ADMINISTRATOR';
};

const authService = {
  getDecodedJwt,
  getRoleFromJwt,
  isAdministrator
};

export default authService;
