import React from "react";
import { Link } from "react-router-dom";
import { Hamburger } from "../Burger/Hamburger";
import "../Header/Header.css";

export function Header() {
  let userName = "Alex Malkovich";
  return (
    <div className="header">
      <Hamburger name={userName} />
      <input type="text" className="header-input" />
      <div className="search">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <Link to={"/SignIn"}>
        <div className="userName">{userName} </div>
      </Link>
    </div>
  );
}

// export class Header extends React.Component<{}, { name: string }> {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       name: "Alex Malkovich",
//     };
//   }
//   render() {
//     return (
//       <div className="header">
//         <Hamburger name="Alex" />
//         <input type="text" className="header-input" />
//         <div className="search">
//           <i className="fa-solid fa-magnifying-glass"></i>
//         </div>
//         <div className="userName">{this.state.name} </div>
//       </div>
//     );
//   }
// }
