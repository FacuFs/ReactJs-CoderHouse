import carrito from "../carrito.svg"
import "../App.css"
import { Link } from "react-router-dom";
import { CartContextUse } from "./context/CartContext";
import { useState } from "react";

const CartWidget = () =>{

    const { carritoVacio, cart, clearCart, removeItem } = CartContextUse();
    let unidadesCart= 0;

    cart.map(element=>{
        unidadesCart += element.cantidad
    })

    const carritoLogo= <img src={carrito} className="logoCarrito"/>
    return(
        <div className="botonCarrito">
            <Link to="/Cart">
            {carritoLogo}
            </Link>
            {unidadesCart}
        </div>
    )
}

export default CartWidget;