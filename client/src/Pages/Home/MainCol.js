import React, { useContext } from "react";
import Questionnaire from "../Questionnaire/Questionnaire";
import Journal from "./Components/Journal";
import { Switch, Route } from "react-router-dom";

export default function MainCol() {
  return (
    <div>
      <header></header>
      <Switch>
        <Route path="/feel" component={Questionnaire} />
        <Route path="/" exact component={Journal} />
      </Switch>
    </div>
  );
}
