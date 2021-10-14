import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartContextUse = () => {
    return useContext(CartContext)
}

export const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([])


    const addItem = (item, cantidad) =>{
        if (isInCart(item.id)) {
            const cantAct = [...cart];

            cantAct.map(i =>{
                if (i.item.id === item.id) {
                    i.cantidad += cantidad;
                }
            })
            setCart(cantAct)
        } else {
            setCart([...cart, {item, cantidad}])
        }
        
    }

    const isInCart = (id) => cart.find(i => i.item.id);

    const clearCart = () => setCart([]);

    const removeItem = (id) =>{
        const cartFilter = cart.filter(i => i.item.id !== id)
        setCart(cartFilter);
    }

    console.log('carrito', cart);

    return(
        <CartContext.Provider value={{cart, addItem, clearCart, removeItem}}>
            {children}
        </CartContext.Provider>
        
        )
}