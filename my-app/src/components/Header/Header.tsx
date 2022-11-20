import React from "react";
import { Hamburger } from "../Burger/Hamburger";
import "../Header/Header.css";
export function Header() {
  return (
    <div className="header">
      <Hamburger onClick={() => console.log("works")} />
    </div>
  );
}
