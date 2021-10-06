import logo from "../logo.svg";
import "../App.css";
import CartWidget from "./CartWidget.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";

function NavBar() {



  return (
      <div className="navBar">
        
        <img src={logo} className="logo" />
        <ul className="menu">
          <Link to="/ItemListContainer" className="menu__opciones">
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
