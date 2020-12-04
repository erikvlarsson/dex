import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Authentication from "./Pages/Authentication/Authentication";
import Spinner from "./Components/Loading/Spinner";
import Nav from "./Components/Nav";
// PAGES
import Input from "./Pages/Vitality/Input";
import Stats from "./Pages/Vitality/Stats";
import ErrorPage from "./Pages/404";
import Profile from "./Pages/Profile";
import Blog from "./Pages/Blog/Blog";

export default function Routes({ auth, hasLoaded }) {
  if (!auth && hasLoaded) {
    return <Authentication />;
  } else if (auth && hasLoaded) {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/blog" component={Blog} />
          <Route path="/stats" component={Stats} />
          <Route path="/input/energy" component={ErrorPage} />
          <Route path="/input/lethargy" component={ErrorPage} />
          <Route path="/input" component={Input} />
          <Route path="/*" component={ErrorPage} />
          <Route path="/" exact component={Input} />
        </Switch>
      </BrowserRouter>
    );
  } else {
    return <Spinner />;
  }
}
