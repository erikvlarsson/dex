import React, { useState, useEffect, createContext } from "react";
import UserService from "../Shared/AuthService";
export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [user, setUserData] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  const setUser = async (userData) => {
    setUserData(userData);
  };

  //fetching user data on component mount
  useEffect(() => {
    if (!hasLoaded) {
      const userService = new UserService();
      //   userService.getUser(id);
    }
  }, [hasLoaded, setUser, setHasLoaded]);

  return (
    <UserContext.Provider
      value={{
        user: user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
