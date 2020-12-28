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
        Math.round(Math.random() * 2) + 1,
        Math.round(Math.random() * 2) + 1,
        Math.round(Math.random() * 2) + 1,
        Math.round(Math.random() * 2) + 1,
        Math.round(Math.random() * 2) + 1,
        Math.round(Math.random() * 2) + 1,
        Math.round(Math.random() * 2) + 1,
      ]);
      setHasLoaded(true);
    }
  }, [streak, hasLoaded]);

  return (
    <div style={{ padding: 10 }}>
      <div
        style={{
          padding: "10px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
          <Habicon style={{ fontSize: 36, marginRight: 20 }} />
          {title}
        </div>
        <FaChevronRight />
      </div>
      <div style={{ display: "flex" }}>
        {streak
          ? streak.map((s) => {
              return <Day value={s} />;
            })
          : null}
      </div>
    </div>
  );
}
