import React from "react";
import "./Button.css";

export function Button(props) {
  return (
    <button type="submit" onClick={props.onClick} className="button">
      {props.text}
    </button>
  );
}
