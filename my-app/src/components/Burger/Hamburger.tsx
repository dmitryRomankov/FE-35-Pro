import { useState } from "react";
import { Link } from "react-router-dom";
import "./Hamburger.css";
import "../cdn.css";
import { menuLinks } from "../appConstants";

export function Hamburger() {
  const [state, setState] = useState(true);
  const [logInState, setogInState] = useState(true);
  const handleClicklogIn = () => {
    setogInState(!logInState);
  };
  const handleClick = () => {
    setState(!state);
  };
  return (
    <div className={"burger"}>
      <i
        onClick={handleClick}
        className={state ? "fa-solid fa-bars" : "fa-solid fa-xmark"}
      ></i>
      <nav
        style={state ? { display: "none" } : { display: "block" }}
        className={"burger-navigation"}
        onClick={() => setState(true)}
      >
        <div className="blur">
          <ul
            className={"navigation-list"}
            onClick={(e) => e.stopPropagation()}
          >
            {menuLinks.map((menu) => {
              return (
                <li
                  onClick={() => setState(true)}
                  className={"nav-item"}
                  key={menu.id}
                >
                  <Link to={menu.link}>{menu.linkName}</Link>
                </li>
              );
            })}
            <button onClick={handleClicklogIn} className="logOut-btn">
              {logInState ? "log out" : "log in"}
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
}
