import React, { createContext, useContext, useState } from 'react';

// 1. Create the Context
const AuthContext = createContext();

// 2. Create the Provider Component
export const AuthProvider = ({ children }) => {
  // For now, we set this to false so the door starts "locked"
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Fake login function (you will connect this to your backend later)
  const login = (email, password) => {
    if (email === 'admin@eter.com' && password === 'admin123') {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Custom Hook to easily use this context anywhere
export const useAuth = () => {
  return useContext(AuthContext);
};