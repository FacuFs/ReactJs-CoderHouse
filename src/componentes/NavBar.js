import logo from '../logo.svg';
import '../App.css'
import CartWidget from './CartWidget.js';


function NavBar() {

  return (
    <div className="navBar">
        <img src={logo} className="logo"/>
        <ul className="menu">
            <button className="menu__opciones">Inicio</button>
            <button className="menu__opciones">Productos</button>
            <button className="menu__opciones" >Contacto</button>
        </ul>
        <CartWidget/>
    </div>
  );
}

export default NavBar;
