import React, { useState } from "react";
import "./Components.css";

export default function SlideChoice({
  options = ["Weekly", "Monthly", "Yearly", "Max"],
}) {
  const [selected, select] = useState(options[0]);
  return (
    <div className="slideChoice">
      {options.map((o) => {
        return (
          <div
            className={selected === o ? "active" : ""}
            onClick={() => select(o)}
          >
            {o}
          </div>
        );
      })}
    </div>
  );
}
