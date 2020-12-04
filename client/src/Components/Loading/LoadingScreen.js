import React from "react";
import "./Loading.css";
import { FaCloud } from "react-icons/fa";

export default function LoadingScreen() {
  return (
    <div id="loadingScreen">
      <FaCloud style={{ fontSize: "120px", marginBottom: "30px" }} />
      <div className="loadingBar">
        <div className="loadingBar-inner"></div>
      </div>
    </div>
  );
}
