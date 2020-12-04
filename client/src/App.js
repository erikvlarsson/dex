import React from "react";
import { AuthContextProvider } from "./Contexts/AuthContext";
import AppMain from "./AppMain";
import "./App.css";
import "./Styles/Buttons.css";
import "./Styles/Inputs.css";

function App() {
  return (
    <AuthContextProvider>
      <AppMain />
    </AuthContextProvider>
  );
}

export default App;
