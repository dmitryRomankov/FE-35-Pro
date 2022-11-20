import "../Burger/Hamburger.css";
import "../cdn.css";

export function Hamburger(props) {
  return (
    <>
      <div className="burger" onClick={props.onClick}>
        <i className="fa-solid fa-bars" style={props.style}></i>
        <i className="fa-solid fa-xmark" style={props.style}></i>
      </div>
      <nav className="burger-navigation" style={props.style}>
        <ul className="navigation-list">
          <li className="nav-item">AM</li>
          <li className="nav-item">DM</li>
        </ul>
      </nav>
    </>
  );
}
