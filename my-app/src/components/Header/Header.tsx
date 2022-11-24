import React from "react";
import { Hamburger } from "../Burger/Hamburger";
import "../Header/Header.css";

export class Header extends React.Component<{}, { name: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "Alex Malkovich",
    };
  }
  render() {
    return (
      <div className="header">
        <Hamburger />
        <input type="text" className="header-input" />
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="userName">{this.state.name} </div>
      </div>
    );
  }
}
