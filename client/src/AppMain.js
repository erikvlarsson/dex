import { useContext } from "react";
import Routes from "./Routes";
import LoadingScreen from "./Components/Loading/LoadingScreen";
import { AuthContext } from "./Contexts/AuthContext";
import { UserContextProvider } from "./Contexts/UserContext";

function AppMain() {
  const { hasLoaded, auth } = useContext(AuthContext);

  if (!hasLoaded) {
    return <LoadingScreen />;
  } else {
    return (
      <div className="App">
        <UserContextProvider>
          <Routes auth={auth} hasLoaded={hasLoaded} />
        </UserContextProvider>
        <section id="alert" />
      </div>
    );
  }
}

export default AppMain;
