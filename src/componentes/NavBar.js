import logo from "../logo.svg";
import "../App.css";
import CartWidget from "./CartWidget.js";
import { Link } from "react-router-dom";

function NavBar() {



  return (
      <div className="navBar">

        <img src={logo} className="logo" />

        <ul className="menu">
          <Link to="/" className="menu__opciones">
            Inicio
          </Link>
          <Link to="/categoria/velas" className="menu__opciones">
            Velas
          </Link>
          <Link to="/categoria/spray" className="menu__opciones">
            Sprays
          </Link>
        </ul>
        <CartWidget />
      </div>

  );
}

export default NavBar;
