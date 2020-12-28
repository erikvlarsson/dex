import React, { useState } from "react";
import { FaHome, FaBug } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import MenuList from "./MenuList";
import "./Components.css";

export default function SloppyNav() {
  const [menuListOpen, setMenuListOpen] = useState(false);
  const toggleMenuList = () => {
    setMenuListOpen(!menuListOpen);
  };
  return (
    <header>
      <Link className="navButton" to="/">
        <FaHome />
      </Link>
      <Link className="navButton" to="/test">
        <FaBug />
      </Link>
      <div
        style={{
          marginLeft: "auto",
        }}
      >
        <div>Coins</div>
        <div>Streak</div>
      </div>
      {/* <div className="navButton" onClick={toggleMenuList}>
          <FaSortDown />
        </div> */}
      {/* <Link
        to="/"
        className="navButton"
        onClick={toggleMenuList}

      >
        <FaBars />
      </Link> */}
      <MenuList visible={menuListOpen} />
    </header>
  );
}
