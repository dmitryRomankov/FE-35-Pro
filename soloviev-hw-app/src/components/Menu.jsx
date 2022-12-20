import React from "react";
import './Menu.css';
import { Link } from "react-router-dom";

export const Menu = (props) => {

  return (
    <div className={props.menuActive ? 'menu active' : 'menu'} onClick={() => props.setActive(false)}>
      <div className="blur">
        <div className="menu__content" onClick={event => event.stopPropagation()}>
          <ul>
            {props.items.map((item) => {
              return (
              <li key={item.id}>
                <Link to={item.link}>{item.value}</Link>
              </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};