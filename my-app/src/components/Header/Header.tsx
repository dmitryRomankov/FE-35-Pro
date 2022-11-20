import React from "react";
import { Hamburger } from "../Burger/Hamburger";
import "../Header/Header.css";
export function Header() {
  return (
    <div className="header">
      <Hamburger />
      <input type="text" className="header-input" />
      <div className="search">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="userName">Alex Malkovich </div>
    </div>
  );
}
