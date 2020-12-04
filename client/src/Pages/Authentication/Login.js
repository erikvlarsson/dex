import React, { useState, useContext, useEffect } from "react";
import AuthService from "../../Shared/AuthService";
import { unToast, toast } from "../../Components/Alert/Toast";
import Spinner from "../../Components/Loading/Spinner";
import { AuthContext } from "../../Contexts/AuthContext";

export default function Login({ goToSignup }) {
  const { setAuth } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const authService = new AuthService();
  const [userData, setUserData] = useState({
    email: localStorage.email,
    password: "",
  });

  useEffect(() => {
    return () => {};
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!(userData.password.length > 0 && userData.email.length > 0)) {
      toast(400, "Please enter both fields.");
    } else {
      await authService.login(userData).then((auth) => {
        if (auth) {
          setLoading(true);
          unToast();
          setAuth(auth);
        } else {
          toast(401, "Incorrect login details.");
        }
      });
    }
    setLoading(false);
  };

  const handleWrite = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const className = "margin-5 padding-10";

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h1>Log in</h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={userData.email}
              autoComplete="off"
              className={className}
              onChange={handleWrite}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              className={className}
              onChange={handleWrite}
            />
            <button type="submit" className={className + " mainButton"}>
              Log in
            </button>
            <div className={className} style={{ textAlign: "center" }}>
              Forgot your password?
            </div>
            <hr style={{ width: "100%" }} />
            <button
              onClick={goToSignup}
              style={{ width: "70%", alignSelf: "center" }}
              className={className + " altButton"}
            >
              Sign up
            </button>
          </form>
        </div>
      )}
    </>
  );
}
