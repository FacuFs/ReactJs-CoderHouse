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

    const isInCart = (id) => cart.find(i => i.item.id)

    console.log('carrito', cart);

    return(
        <CartContext.Provider value={{cart, addItem}}>
            {children}
        </CartContext.Provider>
        
        )
}