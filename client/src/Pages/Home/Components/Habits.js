import React from "react";
import Habit from "./Habit/Habit";
import { FaBrain, FaRunning, FaUtensils, FaMoon } from "react-icons/fa";

const habits = ["Focus", "Exercise", "Nutrition", "Sleep"];

const habicons = [FaBrain, FaRunning, FaUtensils, FaMoon];

export default function Habits() {
  return (
    <div>
      {habits.map((habit, i) => {
        return <Habit title={habit} Habicon={habicons[i]} />;
      })}
    </div>
  );
}
