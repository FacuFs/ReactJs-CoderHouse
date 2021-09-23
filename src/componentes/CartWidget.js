import carrito from "../carrito.svg"
import "../App.css"

const CartWidget = () =>{

    const carritoLogo= <img src={carrito} className="logoCarrito"/>
    const contador=<p>1</p>;
    return(
        <div className="botonCarrito">
        {carritoLogo}
        {contador}
        </div>
    )
}

export default CartWidget;