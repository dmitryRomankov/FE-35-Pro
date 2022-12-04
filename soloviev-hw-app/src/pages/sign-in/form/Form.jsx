import React from "react";
import "./Form.css";

export const Form = (props) => {

  const handleSubmitForm = (e) => {
    e.preventDefault();
    props.onSubmit();
  }

    const { children, method, name, action } = props;
    return (
      <form onSubmit={handleSubmitForm} method={method} action={action} name={name} className="form">
        <div className="form__container">
          <h2>Registration form</h2>
          {children}
        </div>
      </form>
    );
}