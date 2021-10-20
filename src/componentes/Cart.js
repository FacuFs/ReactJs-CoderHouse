import react from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContextUse } from "./context/CartContext";


const Cart = () => {
    const { carritoVacio, cart, clearCart, removeItem } = CartContextUse();
    let precioTotal = 0;


    return (
        <>
            {carritoVacio ?
                <div>
                    <h2>El carrito esta vacio</h2>
                    <Link to="/">volver al catalogo</Link>
                </div>
                :
                <>
                    <h1>CARRITO</h1>

                    <ul>
                        {cart.map(element => {
                            let precioProd = element.item.precio * element.cantidad;
                            precioTotal += precioProd;

                            return (
                                <li key={element.item.id}>
                                    {element.item.nombre} - ${precioProd} ||| unidades: {element.cantidad} <button onClick={() => removeItem(element.item.id)}>Borrar</button>
                                </li>
                            )
                        })}
                    </ul>

                    <button onClick={clearCart}>Vaciar Carrito</button>

                    <h3>TOTAL: ${precioTotal}</h3>
                </>

            }
        </>
    )
}

export default Cart;