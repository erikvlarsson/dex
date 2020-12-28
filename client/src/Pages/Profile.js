import React from "react";

export default function Profile() {
  return (
    <div>
      <h1>Profile!</h1>
      <h3>{localStorage.email}</h3>
    </div>
  );
}
