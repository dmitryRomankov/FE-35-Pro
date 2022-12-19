import { Component, useState } from "react";
import { Link } from "react-router-dom";
import "./Hamburger.css";
import "../cdn.css";
import { menuLinks } from "../appConstants";

export function Hamburger(props) {
  const [state, setState] = useState(true);
  const handleClick = () => {
    setState(!state);
  };
  return (
    <div className="burger">
      <i
        onClick={handleClick}
        className={state ? "fa-solid fa-bars" : "fa-solid fa-xmark"}
      ></i>
      <nav
        onClick={handleClick}
        style={state ? { display: "none" } : { display: "block" }}
        className="burger-navigation"
      >
        <ul className="navigation-list">
          {menuLinks.map((menu) => {
            return (
              <li className="nav-item" key={menu.id}>
                <Link to={menu.link}>{menu.linkName}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
