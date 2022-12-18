import React from "react";
import { Link } from "react-router-dom";
import { Hamburger } from "../burger/Hamburger";
import "./Header.css";

export function Header() {
  let userName = "Alex Malkovich";
  return (
    <div className="header">
      <Hamburger name={userName} />
      <input type="text" className="header-input" />
      <div className="search">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <button className="theme-btn">
        <i className="fa-solid fa-moon"></i>
      </button>
      <Link to={"/SignIn"}>
        <div className="userName">{userName} </div>
      </Link>
    </div>
  );
}
