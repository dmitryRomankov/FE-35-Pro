import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signIn.css";
type Props = {
  title: string;
  name: string;
  password: any;
};

export function SignIn(props: Props): JSX.Element {
  return (
    <div className="container">
      <div className="signIn-wrapp">
        <h1 className="signIn-title">{props.title}</h1>
        <form className="form" action="#">
          <div className="input-container">
            <label className="input-title">
              {props.name}
              <input className="input" type="text" placeholder="Name" />
            </label>
          </div>
          <label className="input-container">
            <div className="input-title">
              {props.password}
              <input className="input" type="text" placeholder="Password" />
            </div>
          </label>
          <Link to={"/Success"}>
            <button type="submit" className="signIn-btn">
              {props.title}
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
