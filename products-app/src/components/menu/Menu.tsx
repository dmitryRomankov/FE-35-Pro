import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { menuLinks } from "../../constants";
import "./styles.scss";

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const handleToggleMenu = () => setMenuOpen(!menuOpen);

  const handleActiveLink = () => ({ isActive }: { isActive: boolean }) =>
    isActive ? { color: "green" } : {};

  return (
    <ul className={menuOpen ? "menu-list" : "menu-list menu-list--closed"}>
      <h3 onClick={handleToggleMenu}>Menu</h3>
      {menuLinks.map((menu) => {
        return (
          <li className="menu-list__item" key={menu.id}>
            <NavLink
              style={handleActiveLink()}
              to={menu.link}
              className=''
            >
              {menu.linkName}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
