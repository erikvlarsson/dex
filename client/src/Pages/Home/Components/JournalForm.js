import React, { useState } from "react";
import "../../../Styles/Buttons.css";

export default function JournalForm({ createPost }) {
  const [text, setText] = useState("");

  const submitPost = (e) => {
    e.preventDefault();
    createPost(text);
    // @ts-ignore
    document.getElementById("journalInput").value = "";
  };

  return (
    <form method="POST" onSubmit={submitPost}>
      <textarea
        id="journalInput"
        rows={6}
        spellCheck={false}
        style={{
          background: "none",
          color: "white",
          fontSize: 18,
          padding: 10,
          outline: "none",
        }}
        onBlur={(e) => setText(e.target.value)}
      />
      <div style={{ display: "flex" }}>
        <button className="mainButton" type="submit">
          POST
        </button>
      </div>
    </form>
  );
}
