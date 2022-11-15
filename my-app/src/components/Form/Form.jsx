import React from "react";
import "./form.css";

export const Form = ({ children, onSubmit, ...rest }) => {
  return (
    <form onSubmit={onSubmit} {...rest} className="form">
      <div className="form__container">
        <h2>Inputs</h2>
        {children}
      </div>
    </form>
  );
};
