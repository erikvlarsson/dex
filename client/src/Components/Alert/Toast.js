import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import AlertBox from "./AlertBox";

export const toast = (statusCode = 200, message, duration = 6000) => {
  try {
    const alertContainer = document.getElementById("alert");
    unmountComponentAtNode(document.getElementById("alert"));
    if (alertContainer) {
      let semiRandomId = `${Math.random()}-${Math.random()}-${Math.random()}`;
      render(
        <AlertBox
          id={semiRandomId}
          statusCode={statusCode}
          message={message}
          hideAlert={() => hideAlert(semiRandomId)}
          duration={duration}
        />,
        alertContainer
      );
      setTimeout(() => {
        hideAlert(semiRandomId);
      }, duration);
    }
  } catch (error) {
    console.log(error);
  }
};

const hideAlert = (id) => {
  const alertBox = document.getElementById(id);
  if (alertBox) {
    unmountComponentAtNode(document.getElementById("alert"));
  }
};

export const unToast = () => {
  unmountComponentAtNode(document.getElementById("alert"));
};
