import React from "react";
import "../registration/registrate.css";
type Props = {
  name: string;
};
export function RegistrationMessage(props: Props): JSX.Element {
  return (
    <div className="container">
      <div className="registrationMessage-wrapp">
        <div className="registrationMessage">
          Добро пожаловать, {props.name} вы успешно зарегистрированы!
        </div>
        <button className="registrationMessage-btn">Home</button>
      </div>
    </div>
  );
}
