import React, { useState } from "react";
import LeftCol from "./LeftCol";
import MainCol from "./MainCol";
import RightCol from "./RightCol";
import "./Home.css";

export default function Home() {
  const [filter, applyFilter] = useState(null);
  return (
    <div className="home">
      <LeftCol />
      <MainCol />
      <RightCol />
    </div>
  );
}
