import React, { useState, useEffect, createContext } from "react";
import AuthService from "../Shared/AuthService";
export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  const setAuth = async (bool) => {
    setAuthenticated(bool);
  };
  const logout = async () => {
    setAuth(false).then(() => {
      localStorage.removeItem("refreshToken");
      sessionStorage.removeItem("accessToken");
    });
  };

  // Authentication when app launches
  useEffect(() => {
    console.log("authUseEffect");
    if (!hasLoaded) {
      const authService = new AuthService();
      authService
        .getRefreshToken()
        .then((auth) => {
          setAuth(auth).then(() => {
            if (auth) {
              setTimeout(() => setHasLoaded(true), 100);
            } else {
              logout().then(() => {
                setHasLoaded(true);
              });
            }
          });
        })
        .catch(() => {
          logout().then(() => {
            setHasLoaded(true);
          });
        });
    }
    // without the following line, useEffect is called twice.
    // eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider
      value={{
        hasLoaded: hasLoaded,
        setAuth: setAuth,
        auth: authenticated,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
