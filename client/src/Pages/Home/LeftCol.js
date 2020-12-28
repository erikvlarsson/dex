import React from "react";
import Nav from "./Components/Nav";
import HabitsHeader from "./Components/HabitsHeader";
import Habits from "./Components/Habits";

export default function LeftCol() {
  return (
    <div>
      {/* <HabitsHeader /> */}
      <div style={{ flex: 1 }}></div>
      <Nav />
      <Habits />
    </div>
  );
}
