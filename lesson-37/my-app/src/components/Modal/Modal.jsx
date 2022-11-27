import React, { useState } from "react";
import "./modal.css";

export function Modal(props) {
  return (
    <>
      <div onClick={props.close} className="modal-container"></div>
      <div className="modal-info">
        <h1 className="modal__title">{props.title}</h1>
      </div>
    </>
  );
}
