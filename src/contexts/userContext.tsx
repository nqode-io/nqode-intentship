import React, { createContext, useState } from 'react';

export const UserContext = createContext({ role: '', setRole: (role: string) => {} });

interface UserContextProviderProps {
  children: React.ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [role, setRole] = useState<string>('');
  return <UserContext.Provider value={{ role, setRole }}>{children}</UserContext.Provider>;
};
