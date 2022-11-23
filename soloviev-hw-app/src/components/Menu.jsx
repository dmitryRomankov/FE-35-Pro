import React from "react";
import './Menu.css';



class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    }
  }

  render() {
    return (
      // <div className={this.state.active ? 'menu active' : 'menu'}>
      <div className='menu active'>
        <div className="blurrrrrrrr">
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
      </div>
    );
  }
}

export default Menu;