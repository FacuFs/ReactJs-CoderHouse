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
          <Link to="/categoria/1" className="menu__opciones">
            Categoria 1
          </Link>
          <Link to="/categoria/2" className="menu__opciones">
            Categoria 2
          </Link>
        </ul>
        <CartWidget />
      </div>

  );
}

export default NavBar;
