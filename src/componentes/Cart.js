import { app } from "firebase";
import react from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"
import { CartContextUse } from "./context/CartContext";


const Cart = () => {
    const { carritoVacio, cart, clearCart, removeItem, totalPrice} = CartContextUse();

    return (
        <>
            {carritoVacio ?
                <div className="cartContainer">
                    <h2>El carrito esta vacio</h2>
                    <Link className="btnDetalles" to="/">volver al catalogo</Link>
                </div>
                :
                <div className="cartContainer">
                    <h1>CARRITO</h1>

                    <ul className="listaCart">
                        {cart.map(element => {
                            let precioProd = element.item.precio * element.cantidad;
                            

                            return (
                                <li key={element.item.id}>
                                    <p>{element.item.nombre} - ${precioProd} </p> 
                                    <p>Unidades: {element.cantidad}</p>
                                    <button className="btnDetalles" onClick={() => removeItem(element.item.id)}>Borrar</button>
                                </li>
                            )
                        })}
                    </ul>   
                    

                    <button className="btnDetalles" onClick={clearCart}>Vaciar Carrito</button>

                    <h3>TOTAL: ${totalPrice}</h3>

                    <Link className="btnDetalles" to='/Form'>Finalizar compra</Link>
                </div>

            }
        </>
    )
}

export default Cart;