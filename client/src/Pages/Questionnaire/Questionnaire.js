import React, { useState } from "react";
import PostService from "../../Shared/PostService";
import Foods from "./Foods";
import "./Questionnaire.css";

export default function Questionnaire() {
  const postService = new PostService();
  const [feeling, setFeeling] = useState(1);
  const [factors, setFactors] = useState([]);

  const pick = (factor) => {
    if (!factors.includes(factor)) {
      addFactor(factor);
    } else {
      removeFactor(factor);
    }
  };

  const addFactor = (value) => {
    let factorsCopy = [...factors];
    factorsCopy.push(value);
    setFactors(factorsCopy);
  };

  const removeFactor = (value) => {
    let factorsCopy = [...factors];
    const index = factorsCopy.indexOf(value);
    if (index > -1) {
      factorsCopy.splice(index, 1);
    }
    setFactors(factorsCopy);
  };

  const submitPost = () => {
    postService.createPost(feeling, factors);
  };

  return (
    <div className="questionnaire">
      <header>Let's figure out why you feel ___!</header>
      <div className="grid">
        <Foods factors={factors} pick={pick} />
      </div>
      <p>{JSON.stringify(feeling)}</p>
      <p>{JSON.stringify(factors)}</p>
      <button onClick={submitPost}>SUBMIT</button>
    </div>
  );
}

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
