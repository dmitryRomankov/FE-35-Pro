import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="header">
          <button
            className="button-burger header__button"
            onClick={this.props.onMenuChange}
          >
            <span></span>
          </button>
          <nav className="header-nav">
            <ul className="header-nav__list">
              {this.props.items.map((item, index) => {
                return (
                  <li key={index} className="header-nav__item">
                    <a href={item.href}>{item.value}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;
