import React, { useContext } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { AuthContext } from "../Contexts/AuthContext";

export default function MenuList({ visible }) {
  const { logout } = useContext(AuthContext);

  if (!visible) {
    return null;
  } else {
    return (
      <div
        style={{
          position: "fixed",
          right: 0,
          top: "70px",
          background: "rgba(255,255,255,0.05)",
          boxShadow: "inset 0 0 1px 1px rgba(255,255,255,0.2)",
          padding: "10px 0",
          borderRadius: "5px",
        }}
        onClick={logout}
      >
        <div style={{ padding: "5px 30px", cursor: "pointer" }}>Log out</div>
        <hr />
        <div style={{ padding: "5px 30px", cursor: "pointer" }}>
          MenuList Item
        </div>
      </div>
    );
  }
}
