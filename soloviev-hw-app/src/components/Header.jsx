import React, { Component } from 'react';
import './Header.css';
import Menu from "./Menu";


class Header extends React.Component {
  
  render() {
    return (
      <>
        <header className='header'>
            <button className='button-burger header__button'>
              <span></span>
            </button>
            <nav className="header-nav">
              <ul className='header-nav__list'>
                <li className="header-nav__item">
                  <a href="#main-page">Главная</a>
                </li>
                <li className="header-nav__item">
                  <a href="#contacts">Контакты</a>
                </li>
              </ul>
            </nav>
        </header>

      </>
    );
  }
}

export default Header;