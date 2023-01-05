import React from "react";
import { Link } from "react-router-dom";
import "./registrate.css";
type Props = {
  name: string;
};
export function RegistrationMessage(props: Props): JSX.Element {
  return (
    <Link to={"/"}>
      <div className="container">
        <div className="registrationMessage-wrapp">
          <div className="registrationMessage">
            Welcome, {props.name} you've successfully registered!
          </div>
          <button className="registrationMessage-btn">Home</button>
        </div>
      </div>
    </Link>
  );
}
