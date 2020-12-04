import React, { useState } from "react";
const emojis = ["😄", "😒"];
const feelings = ["Energetic", "Lethargic"];

export default function InputSq({ onClick, expanded }) {
  const [feeling, setFeeling] = useState(0);
  return (
    <form className="inputSq">
      <div className="emojiWrapper" onClick={onClick}>
        {emojis.map((emoji, i) => {
          return (
            <div
              className={feeling === i ? feelings[i] : null}
              onClick={() => setFeeling(i)}
            >
              <div>{emoji}</div>
              <div>{feelings[i]}</div>
            </div>
          );
        })}
      </div>
      <label>How do you feel?</label>
      {expanded ? <div>EXPANDED</div> : null}
    </form>
  );
}
