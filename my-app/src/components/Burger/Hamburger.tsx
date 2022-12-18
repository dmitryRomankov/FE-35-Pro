import { Component, useState } from "react";
import { Link } from "react-router-dom";
import "./Hamburger.css";
import "../cdn.css";
import { Header } from "../header/Header";
import { menuLinks } from "../appConstants";

export function Hamburger(props) {
  const [state, setState] = useState(true);
  const handleClick = () => {
    setState(!state);
  };
  if (state) {
    return (
      <div className="burger">
        <i className="fa-solid fa-bars" onClick={handleClick}></i>
      </div>
    );
  } else {
    return (
      <div className="burger" onClick={handleClick}>
        <i className="fa-solid fa-xmark"></i>
        <nav className="burger-navigation">
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
}
