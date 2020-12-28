import React, { useEffect, useState } from "react";
import Day from "./Day";
import { FaChevronRight } from "react-icons/fa";
import "../Components.css";

export default function Habit({ title, Habicon }) {
  const [hasLoaded, setHasLoaded] = useState(null);
  const [streak, setStreak] = useState(null);

  useEffect(() => {
    if (!hasLoaded) {
      setStreak([
        randomNum(),
        randomNum(),
        randomNum(),
        randomNum(),
        randomNum(),
        randomNum(),
        randomNum(),
      ]);
      setHasLoaded(true);
    }
  }, [streak, hasLoaded]);

  return (
    <div style={{ padding: 10 }}>
      <div
        style={{
          padding: "5px 0 10px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
          <Habicon style={{ fontSize: 30, marginRight: 10 }} />
          {title}
        </div>
        <FaChevronRight />
      </div>
      <div style={{ display: "flex" }}>
        {streak
          ? streak.map((dayValue, i) => {
              return <Day value={dayValue} index={i} />;
            })
          : null}
      </div>
    </div>
  );
}

const randomNum = () => {
  let x = 0;
  if (Math.random() * 100 > 5) {
    x = Math.round(Math.random() * 3) + 1;
  }
  return x;
};
