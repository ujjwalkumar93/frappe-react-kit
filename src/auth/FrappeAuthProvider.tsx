import React, { useState, useEffect } from 'react';
import { FrappeAuthContext } from './frappeAuthContext';
import { login, logout, getCurrentUser } from './authApi';

export const FrappeAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  const handleLogin = async (email: string, password: string) => {
    await login(email, password);
    const user = await getCurrentUser();
    setCurrentUser(user);
  };

  const handleLogout = async () => {
    await logout();
    setCurrentUser(null);
  };

  const refreshUser = async () => {
    try {
      const user = await getCurrentUser();
      setCurrentUser(user);
    } catch {
      setCurrentUser(null);
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <FrappeAuthContext.Provider
      value={{
        currentUser,
        login: handleLogin,
        logout: handleLogout,
        refreshUser,
      }}
    >
      {children}
    </FrappeAuthContext.Provider>
  );
};
