import React from "react";
import Habit from "./Habit/Habit";
import { FaMoon, FaBrain, FaFire, FaUtensils } from "react-icons/fa";

const habits = [
  "Focus & Occupation",
  "Physical Activity",
  "Nutrition",
  "Sleep",
];

const habicons = [FaBrain, FaFire, FaUtensils, FaMoon];

export default function Habits() {
  return (
    <div>
      {habits.map((habit, i) => {
        return <Habit title={habit} Habicon={habicons[i]} />;
      })}
    </div>
  );
}
