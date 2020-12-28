import React from "react";
const blobs = [1, 2, 3];

export default function Day({ value = 0 }) {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        padding: 3,
        justifyContent: "flex-end",
        flexDirection: "column-reverse",
      }}
    >
      {blobs.map((blob, i) => {
        let color = "linear-gradient(grey, #444)";
        if (value > 2) {
          color = "linear-gradient(yellowgreen, green)";
        } else if (value === 2) {
          color = "linear-gradient(yellow, yellowgreen)";
        }
        return (
          <div
            className="dayBlob"
            style={i < value ? { background: color } : null}
          ></div>
        );
      })}
    </div>
  );
}
