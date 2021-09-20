import logo from '../logo.svg';
import '../App.css'


function NavBar() {

  return (
    <div className="navBar">
        <img src={logo} className="logo"/>
        <ul className="menu">
            <button className="menu__opciones">Inicio</button>
            <button className="menu__opciones" >Productos</button>
            <button className="menu__opciones" >Contacto</button>
        </ul>
    </div>
  );
}

export default NavBar;
