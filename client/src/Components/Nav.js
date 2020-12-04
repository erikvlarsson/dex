import React, { useState } from "react";
import {
  FaRunning,
  FaEllipsisV,
  FaPencilAlt,
  FaUser,
  FaSignal,
  FaPlusSquare,
} from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import MenuList from "./MenuList";

export default function SloppyNav() {
  const [menuListOpen, setMenuListOpen] = useState(false);
  const toggleMenuList = () => {
    setMenuListOpen(!menuListOpen);
  };
  return (
    <header>
      <div>
        <Link
          className="navButton"
          to="/stats"
          activeClassName={"navButton-active"}
        >
          <FaSignal style={{ transform: "rotate(90deg) scaleX(-1)" }} />
        </Link>
        {/* <Link
            className="navButton"
            to="/blog"
            activeClassName={"navButton-active"}
          >
            <FaPencilAlt />
          </Link> */}
      </div>
      <div style={{ justifyContent: "center" }}>
        {/* <Link
            className="navButton"
            to="/exercise"
            activeClassName={"navButton-active"}
          >
            <FaRunning />
          </Link> */}
        <Link
          className="navButton"
          to="/input"
          activeClassName={"navButton-active"}
        >
          <FaPlusSquare />
        </Link>
      </div>
      <div
        style={{
          justifyContent: "flex-end",
        }}
      >
        <Link
          className="navButton"
          to="/profile"
          activeClassName={"navButton-active"}
        >
          <FaUser />
        </Link>
        <div className="navButton" onClick={toggleMenuList}>
          <FaEllipsisV />
        </div>
      </div>
      <MenuList visible={menuListOpen} />
    </header>
  );
}
