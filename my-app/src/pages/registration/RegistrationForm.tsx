import React, { useState } from "react";
import "./registrate.css";
import { RegistrationMessage } from "./RegistrationMessage";
interface IPropsRegistration {
  title: string;
}
export function RegistrationForm(props: IPropsRegistration): JSX.Element {
  const [form, setRegistrateForm] = useState({
    password: "",
    email: "",
    name: "",
  });
  const [isEnter, setIsEnter] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("state", form);
    setIsEnter(!isEnter);
  };
  const handleChange = (event: any) => {
    setRegistrateForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  if (!isEnter) {
    return (
      <div className="container">
        <div className="registrate-wrapp">
          <h1 className="registrate-title">{props.title}</h1>
          <form
            className="registrate-form"
            action=""
            onSubmit={handleSubmit}
            name="name"
            method=""
          >
            <div className="registrate-input-container">
              <label className="registrate-input-title">Email </label>
              <input
                className="registrate-input"
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
              <label className="registrate-input-title">Name </label>
              <input
                className="registrate-input"
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
              />

              <label className="registrate-input-title">Password </label>
              <input
                className="registrate-input"
                placeholder="Password"
                type="password"
                name="password"
                onChange={handleChange}
              />
              <button type="submit" className="registrate-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return <RegistrationMessage name={form.name} />;
  }
}
