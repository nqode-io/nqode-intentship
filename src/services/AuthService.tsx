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

  if (token == null) return null;

  return jwtDecode(token);
};

const getRoleFromJwt = (): string | null => {
  const decodedJwt = getDecodedJwt();

  if (decodedJwt == null) return null;

  return decodedJwt.userRole;
};

const isAdministrator = (): boolean | null => {
  if (getRoleFromJwt() === 'ADMINISTRATOR') return true;
  return false;
};

const AuthService = {
  getDecodedJwt,
  getRoleFromJwt,
  isAdministrator
};

export default AuthService;
