import { Component } from "react";
import "../burger/burger.css";

export class Hamburger extends Component<
  {},
  { className: boolean; name: string }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      className: true,
      name: "Menu",
    };
  }
  handleClick = () => {
    this.setState((state) => ({
      className: !state.className,
    }));
  };
  render() {
    if (this.state.className) {
      return (
        <div className="burger">
          <button className="burger-btn" onClick={this.handleClick}>
          <svg viewBox="0 0 100 80" width="40" height="40">
                <rect width="80" height="10"></rect>
                <rect y="30" width="80" height="10"></rect>
                <rect y="60" width="80" height="10"></rect>
            </svg>
          </button>
        </div>
      );
    } else {
      return (
        <div className="burger">
          <nav className="burger-navigation">
            <ul className="navigation-list">
              <button className="close-btn" onClick={this.handleClick}>
              <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="40px" height="40px">
                <path d="M 32 3 C 24.2 3 17 6 11.5 11.5 C 6 17 3 24.3 3 32 C 3 39.7 6 47 11.5 52.5 C 17 58 24.3 61 32 61 C 39.7 61 47 58 52.5 52.5 C 58 47 61 39.8 61 32 C 61 24.2 58 17 52.5 11.5 C 47 6 39.8 3 32 3 z M 32 6 C 39 6 45.500391 8.6996094 50.400391 13.599609 C 55.300391 18.499609 58 25 58 32 C 58 39 55.300391 45.500391 50.400391 50.400391 C 45.500391 55.300391 39 58 32 58 C 25 58 18.499609 55.300391 13.599609 50.400391 C 8.6996094 45.500391 6 39 6 32 C 6 25 8.6996094 18.499609 13.599609 13.599609 C 18.499609 8.6996094 25 6 32 6 z M 25.289062 23.681641 A 1.5026503 1.5026503 0 0 0 24.234375 26.257812 L 29.875 31.941406 L 24.140625 37.632812 A 1.5026503 1.5026503 0 1 0 26.257812 39.765625 L 31.992188 34.074219 L 37.632812 39.757812 A 1.5026503 1.5026503 0 1 0 39.765625 37.640625 L 34.125 31.957031 L 39.757812 26.367188 A 1.5026503 1.5026503 0 1 0 37.640625 24.234375 L 32.007812 29.824219 L 26.367188 24.140625 A 1.5026503 1.5026503 0 0 0 25.289062 23.681641 z"/>
                </svg>
              </button>
              <li className="nav-item">{this.state.name}</li>
              <li className="nav-item">Home</li>
              <li className="nav-item">Main</li>
              <li className="nav-item">Cart</li>
              <li className="nav-item">About</li>
            </ul>
          </nav>
        </div>
      );
    }
  }
}