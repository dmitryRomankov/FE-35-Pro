import React from "react";
import { useState } from "react";
import "./Form.css";

export function FormRegistarion(props) {
  const [value, setValue] = useState("");
  const [pass, setPass] = useState("");

  const changeHandlerEmail = (event) => {
    setValue(event.target.value);
  };
  const changeHandlerPass = (event) => {
    setPass(event.target.value);
  };

  return (
    <form className="form">
      <h1>Sign In</h1>
      <input
        value={value}
        onChange={changeHandlerEmail}
        className="input"
        placeholder="email.."
        type="text"
      />
      <input
        value={pass}
        onChange={changeHandlerPass}
        className="input"
        placeholder="password.."
        type="password"
      />
      <p>mail:{value}</p>
      <p>pass:{pass}</p>
    </form>
  );
}
