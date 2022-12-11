import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./success.css";
import { Posts } from "../Posts/Posts";
export function Success(): JSX.Element {
  const [state, setState] = useState(true);
  const handleClick = () => {
    setState(!state);
  };

  return (
    <div className="container">
      <div className="success-wrapp">
        <h1 className="success-title">Success</h1>
        <div className="success-message">
          <p className="message">you have successfully logged in</p>
          <Link to={"/"}>
            <button className="success-btn" type="submit" onClick={handleClick}>
              view posts
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
