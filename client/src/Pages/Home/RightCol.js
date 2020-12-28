import React from "react";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Stats from "./Components/Stats";
import Graph from "./Components/Graph";
import Mood from "./Components/Mood";
import SlideChoice from "./Components/SlideChoice";

export default function RightCol() {
  return (
    <div>
      <header>
        <SlideChoice />
        <Link
          to="/"
          className="navButton"
          style={{
            marginLeft: "auto",
          }}
        >
          <FaBars />
        </Link>
      </header>
      <Graph />
      {/* <Mood setFeeling={() => console.log("setFeeling from rightCol")} /> */}
      <Stats />
    </div>
  );
}
