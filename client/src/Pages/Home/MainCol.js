import React, { useContext } from "react";
import Questionnaire from "../Questionnaire/Questionnaire";
import Journal from "./Components/Journal";
import { Switch, Route } from "react-router-dom";
import { FaCalendar, FaHome } from "react-icons/fa";

export default function MainCol() {
  return (
    <div>
      <header style={{ justifyContent: "space-evenly", fontSize: 30 }}>
        <FaHome />
        <FaCalendar />
      </header>
      <Switch>
        <Route path="/feel" component={Questionnaire} />
        <Route path="/" exact component={Journal} />
      </Switch>
    </div>
  );
}
