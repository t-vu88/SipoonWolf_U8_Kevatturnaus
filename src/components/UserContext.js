// UserContext.js
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const users = {
    turnaus: { username: 'turnaus', password: 'turnaus', isAdmin: false },
    admin: { username: 'admin', password: 'wolf', isAdmin: true }
  };

  const login = (username, password) => {
    // Check if the provided username and password match any user
    const authenticatedUser = Object.values(users).find(user => user.username === username && user.password === password);
    if (authenticatedUser) {
      setUser(authenticatedUser);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
