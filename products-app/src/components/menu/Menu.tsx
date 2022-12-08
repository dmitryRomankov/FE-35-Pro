import React, { useContext, useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { menuLinks } from "../../constants";
import { ThemeContext } from "../context/Context";
import { changeThemeAction } from "../../store/actions";
import { themeSelector } from "../../store/selectors";
import "./styles.scss";

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const dispatch = useDispatch();
  const context = useContext(ThemeContext);
  const currentTheme = useSelector(themeSelector);

  const handleToggleMenu = () => setMenuOpen(!menuOpen);

  const handleChangeTheme = () => dispatch(changeThemeAction(currentTheme === "light" ? "dark" : "light"));

  const handleActiveLink =
    () =>
    ({ isActive }: { isActive: boolean }) =>
      isActive ? { color: "green" } : {};

  return (
    <ul
      style={{
        background: context[currentTheme].background,
        color: context[currentTheme].textColor,
        padding: '24px',
        height: '100vh'
      }}
      className={menuOpen ? "menu-list" : "menu-list menu-list--closed"}
    >
      <button onClick={handleChangeTheme}>Change Theme</button>
      <h3 onClick={handleToggleMenu}>Menu</h3>
      {menuLinks.map((menu) => {
        return (
          <li className="menu-list__item" key={menu.id}>
            <NavLink style={handleActiveLink()} to={menu.link} className="">
              {menu.linkName}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
