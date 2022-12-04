import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./Context/Context";
import { Link } from "react-router-dom";
import "./Header.css";


export const Header = (props) => {

  const theme = useContext(ThemeContext);

  return (
    <>
      <header className="header">
        <button
          className="button-burger header__button"
          onClick={props.onMenuChange}
        >
          <span></span>
        </button>
        <nav className="header-nav">
          <ul className="header-nav__list">
            {props.items.map((item) => {
              return (
                <li key={item.id} className="header-nav__item">
                  {/* <a href={item.href}>{item.value}</a> */}
                  <Link reloadDocument to={item.link}>{item.value}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* <button className="button-theme" onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'dark' : 'light'} mode
        </button> */}
      </header>
      
    </>
  );
  
};
