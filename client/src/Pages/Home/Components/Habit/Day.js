import React from "react";
const blobs = [1, 2, 3];

export default function Day({ value = 0, index }) {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        padding: 1,
        justifyContent: "flex-end",
        flexDirection: "column-reverse",
      }}
    >
      {blobs.map((i) => {
        let color = "linear-gradient(#5cffad, #0a5e34)";
        if (value === 1) {
          color = "linear-gradient(red, darkred)";
        }
        return (
          <div
            className="dayBlob"
            style={
              i < value
                ? {
                    background: color,
                    boxShadow:
                      "inset 0 1px 3px rgba(255, 255, 255, 0.1), 0 0 1px 1px rgba(0, 0, 0, 0.4)",
                  }
                : null
            }
          />
        );
      })}
    </div>
  );
}
