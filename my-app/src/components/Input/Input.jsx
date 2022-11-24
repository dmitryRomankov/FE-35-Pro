import React from "react";
import "./input.css";

export const Input = (props) => {
  return (
    <div className="input-container">
      {props.label && <label htmlFor="input">{props.label}</label>}
      <input {...props} className="input" id="input" />
    </div>
  );
};
