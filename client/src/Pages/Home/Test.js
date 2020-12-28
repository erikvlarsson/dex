import React from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import "../../Components/Components.css";
import "./Home.css";

export default function Test() {
  return (
    <div>
      <header>
        <Link className="navButton" to="/">
          <FaAngleLeft />
        </Link>
      </header>
      <div
        style={{
          width: "600px",
          border: "1px solid grey",
          padding: "20px",
          margin: "0 auto",
        }}
      >
        YES
      </div>
    </div>
  );
}
