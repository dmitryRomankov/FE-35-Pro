import React from "react";
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <>
        <header className='header'>
          <div className="container">
            <button className='button-burger header__button '>Burger</button>
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
          </div>

        </header>

      </>
    );
  }
}

export default Header;