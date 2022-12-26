import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { ThemeContext } from "./Context/Context";
import { changeTheme } from "../store/theme-slice";
import { themeSelector } from "../store/selectors";
import { Input } from "../pages/sign-in/input/Input";

import "./Header.css";

export const Header = (props) => {
  const dispatch = useDispatch();
  const context = useContext(ThemeContext);
  const currentTheme = useSelector(themeSelector);

  const handleChangeTheme = () => {
    dispatch(changeTheme(currentTheme === "light" ? "dark" : "light"));
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <header className="header" style={{
        background: context[currentTheme].backgroundColor,
        color: context[currentTheme].textColor,
      }}>
        <button
          className="button-burger header__button"
          onClick={props.onMenuChange}
        >
          {props.menuActive ? (
            <AiOutlineClose size={25} color="darkred" />
          ) : (
            <AiOutlineMenu size={25} />
          )}
        </button>
        <nav className="header-nav">
          <ul className="header-nav__list">
            {props.items.map((item) => {
              return (
                <li key={item.id} className="header-nav__item">
                  <Link  to={item.link}>
                    {item.value}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="header-right">
          <button className="button-theme" onClick={handleChangeTheme}>
            {currentTheme === "light" ? "dark" : "light"} mode
          </button>
          <Input
            name="search"
            type="text"
            placeholder="search.."
            onChange={handleChange}
          />
        </div>
      </header>
    </>
  );
};
