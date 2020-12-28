import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Authentication from "./Pages/Authentication/Authentication";
import Home from "./Pages/Home/Home";
import Test from "./Pages/Home/Test";
import Spinner from "./Components/Loading/Spinner";

export default function Routes({ auth, hasLoaded }) {
  if (!auth && hasLoaded) {
    return <Authentication />;
  } else if (auth && hasLoaded) {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/test" component={Test} />
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    );
  } else {
    return <Spinner />;
  }
}
