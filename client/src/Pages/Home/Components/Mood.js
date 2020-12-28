import React from "react";
import { Link } from "react-router-dom";
import "./Components.css";

export default function Mood({ setFeeling }) {
  return (
    <div className="mood">
      <Link
        onClick={() => setFeeling(0)}
        to="/feel"
        className="moodSquare lethargic"
      >
        <div>😒</div>
        Lethargic
      </Link>
      <Link
        onClick={() => setFeeling(1)}
        to="/feel"
        className="moodSquare energetic"
      >
        <div>😐</div>
        Ok
      </Link>
      <Link
        onClick={() => setFeeling(1)}
        to="/feel"
        className="moodSquare energetic"
      >
        <div>🙂</div>
        Good
      </Link>
      <Link
        onClick={() => setFeeling(1)}
        to="/feel"
        className="moodSquare energetic"
      >
        <div>😀</div>
        Energetic
      </Link>
    </div>
  );
}
