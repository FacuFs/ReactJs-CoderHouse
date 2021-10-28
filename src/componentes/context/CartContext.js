import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartContextUse = () => {
    return useContext(CartContext)
}

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [carritoVacio, setCarritoVacio] = useState(true)

    const addItem = (item, cantidad) => {
        setCarritoVacio(false);
        if (isInCart(item.id)) {
            const cantAct = [...cart];

            cantAct.map(i => {
                if (i.item.id == item.id) {
                    i.cantidad += cantidad;
                }
            })
            setCart(cantAct)
        } else {
            setCart([...cart, { item, cantidad }])
        }

    }

    const totalPrice = cart.reduce((acc, product) => acc += ((product.item.precio)*(product.cantidad)), 0)
    parseInt(totalPrice)

    const isInCart = (id) => cart.find(i => i.item.id == id);

    const clearCart = () =>{
        setCart([]);
        setCarritoVacio(true);
    }

    const removeItem = (id) => {
        const cartFilter = cart.filter(i => i.item.id !== id)
        setCart(cartFilter);
    }

    console.log('carrito', cart);

    return (
        <CartContext.Provider value={{ carritoVacio, cart, addItem, clearCart, removeItem, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}