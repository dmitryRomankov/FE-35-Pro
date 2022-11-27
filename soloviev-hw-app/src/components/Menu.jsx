import React from "react";
import './Menu.css';

class Menu extends React.Component {


  render() {
    return (
      <div className={this.props.menuActive ? 'menu active' : 'menu'}>
        <div className="menu__content">
          <ul>
            {this.props.items.map((item, index) => {
              return (
              <li key={index}>
                <a href={item.href}>{item.value}</a>
              </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;