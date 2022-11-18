import React, { createContext, useState } from 'react';

export const RoleContext = createContext({ role: '', setRole: (role: string) => {} });

interface UserContextProviderProps {
  children: React.ReactNode;
}

export const RoleContextProvider = ({ children }: UserContextProviderProps) => {
  const [role, setRole] = useState<string>('');
  return <RoleContext.Provider value={{ role, setRole }}>{children}</RoleContext.Provider>;
};
