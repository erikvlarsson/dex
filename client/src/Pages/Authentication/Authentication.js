import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

export default function Authentication() {
  const [isSignupMode, setSignupMode] = useState(false);

  if (isSignupMode) {
    return <Signup goToLogin={() => setSignupMode(false)} />;
  } else {
    return <Login goToSignup={() => setSignupMode(true)} />;
  }
}
