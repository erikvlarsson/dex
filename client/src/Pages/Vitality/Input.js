import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Vitality.css";
import InputSq from "./InputSq";

export default function Input() {
  const [isInputMode, setInputMode] = useState(false);
  const toggleInputMode = () => {
    setInputMode(!isInputMode);
  };
  return (
    <div className="vitality">
      <div style={{ fontSize: 20, margin: 10 }}>How do you feel?</div>
      <div>
        <Link to="/input/energy" className="moodSquare energetic">
          <div>😀</div>
          Energetic
        </Link>
        <Link to="/input/lethargy" className="moodSquare lethargic">
          <div>😒</div>
          Lethargic
        </Link>
      </div>
      {/* <InputSq expanded={isInputMode} onClick={toggleInputMode} /> */}
    </div>
  );
}

const foods = [
  "Sugar",
  "Gluten",
  "Non-gluten Grains",
  "Rice",
  "Dairy",
  "Meat",
  "Fish",
  "Nuts",
  "Fruit",
  "Veggies",
  "Caffeine",
  "Legumes",
  "Eggs",
  "Dairy",
];

const intoxicants = [
  "caffeine",
  "alcohol",
  "marijuana",
  "cigarettes",
  "medication",
  "other",
];

const otherFactors = [
  "Nut",
  "LateNightMeal",
  "Stress",
  "Boredom",
  "Inactivity",
];

// MEAL SIZE
// MEAL CONTENT
// MEAL TIME
// MOOD AT THE TIME OF MEAL
