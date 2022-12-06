import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import { ThemeContext } from "./Context/Context";
import { Input } from "../pages/sign-in/input/Input";


import "./Header.css";


export const Header = (props) => {

  const theme = useContext(ThemeContext);

  const handleChange = (event) => {
    console.log(event.target.value);
};

  return (
    <>
      <header className="header">
        <button
          className="button-burger header__button"
          onClick={props.onMenuChange}
        >
          {props.menuActive ? <AiOutlineClose size={25} color='darkred'/> : <AiOutlineMenu size={25}/>}
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
        <Input name="search" type="text" placeholder="search.." onChange={handleChange} />
      </header>
      
    </>
  );
  
};
