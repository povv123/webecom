import React, { createContext, useContext, useState, useEffect } from 'react';
import * as authApi from '../API/auth';
import { getToken } from '../API/client';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!getToken()) {
      setIsLoading(false);
      return;
    }
    authApi
      .fetchCurrentUser()
      .then((current) => {
        setUser(current);
        setIsAuthenticated(true);
      })
      .catch(() => {
        authApi.logout();
      })
      .finally(() => setIsLoading(false));
  }, []);

  const login = async (email, password) => {
    const loggedInUser = await authApi.login(email, password);
    setUser(loggedInUser);
    setIsAuthenticated(true);
    return loggedInUser;
  };

  const register = async (email, password) => {
    const newUser = await authApi.register(email, password);
    setUser(newUser);
    setIsAuthenticated(true);
    return newUser;
  };

  const logout = () => {
    authApi.logout();
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
