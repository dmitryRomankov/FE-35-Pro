import { Component, useState } from "react";
import { isPropertySignature } from "typescript";
import "../Burger/Hamburger.css";
import "../cdn.css";
import { Header } from "../Header/Header";

export function Hamburger(props) {
  const [state, setState] = useState(true);
  const handleClick = () => {
    setState(!state);
  };
  if (state) {
    return (
      <div className="burger">
        <i className="fa-solid fa-bars" onClick={handleClick}></i>
      </div>
    );
  } else {
    return (
      <div className="burger" onClick={handleClick}>
        <i className="fa-solid fa-xmark"></i>
        <nav className="burger-navigation">
          <ul className="navigation-list">
            <li className="nav-item">{props.name}</li>
            <li className="nav-item">Home</li>
            <li className="nav-item">Favorite</li>
          </ul>
        </nav>
      </div>
    );
  }
}

// export class Hamburger extends Component<
//   {},
//   { className: boolean; name: string }
// > {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       className: true,
//       name: "Alex Malkovich",
//     };
//   }
//   handleClick = () => {
//     this.setState((state) => ({
//       className: !state.className,
//     }));
//   };
//   render() {
//     if (this.state.className) {
//       return (
//         <div className="burger">
//           <i className="fa-solid fa-bars" onClick={this.handleClick}></i>
//         </div>
//       );
//     } else {
//       return (
//         <div className="burger" onClick={this.handleClick}>
//           <i className="fa-solid fa-xmark"></i>
//           <nav className="burger-navigation">
//             <ul className="navigation-list">
//               <li className="nav-item">{this.state.name}</li>
//               <li className="nav-item">Home</li>
//               <li className="nav-item">Favorite</li>
//             </ul>
//           </nav>
//         </div>
//       );
//     }
//   }
// }
