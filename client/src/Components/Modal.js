import React from "react";
import "./Components.css";

export default function Modal({ visible, closeModal, children }) {
  return visible ? (
    <div className="modalWrapper">
      <div className="modal">
        <div className="modalCloseButton">XXX</div>
        {children}
      </div>
    </div>
  ) : null;
}
