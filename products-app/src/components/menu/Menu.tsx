import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { menuLinks } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { changeTheme } from "../../store/theme-slice";
import "./styles.scss";

export const Menu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const currentTheme = useAppSelector((state) => state.theme.currentTheme);
  const dispatch = useAppDispatch();

  const handleChangeTheme = () =>
    dispatch(changeTheme(currentTheme === "light" ? "dark" : "light"));

  const handleActiveLink =
    () =>
    ({ isActive }: { isActive: boolean }) =>
      isActive ? { color: "green" } : {};

  return (
    <ul
      style={{
        padding: "24px",
        height: "100vh",
      }}
      className={"menu-list"}
    >
      <button onClick={handleChangeTheme}>Change Theme</button>
      <br />
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Sing In"}
      </button>
      <h3>Menu</h3>
      {isLoggedIn &&
        menuLinks.map((menu) => {
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
