import react, { useState } from "react";
import { CartContextUse } from "./context/CartContext";
import {getFirestore} from "../firebase/index";

const Form = () =>{
    const { carritoVacio, cart, clearCart, removeItem, totalPrice} = CartContextUse();
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState(0);
    const [email, setEmail] = useState('');
    
    const comprador = () =>{
        const bd= getFirestore();
        const itemCollection = bd.collection('ordenDeCompra');
        const orden = {
            comprador: {
            nombre: nombre,
            telefono: telefono,
            email: email,
            },
            items: cart.map((e) =>{
                return{
                    id: e.item.id,
                    nombre: e.item.nombre,
                    precio: e.item.precio,
                    cantidad: e.cantidad,
                }
            }),
            total:totalPrice,
            

        }   
        itemCollection.add(orden).then(({id}) => {
            console.log(id);
            alert('compra realizada con extito. ID DE OPERACION:' + id )
        })

    }
    
    const handleInputName = ({target}) => setNombre(target.value)
    const handleInputTel = ({target}) => setTelefono(target.value)    
    const handleInputEmail = ({target}) => setEmail(target.value)

    const handleSubmit = (e) =>{
        e.preventDefault();
        comprador();

    }

    return(
        <>
            <form onSubmit={handleSubmit} className='containerForm'> 
                <input type='text' placeholder='Nombre' onChange={handleInputName}></input>
                <input type='text' placeholder='Email' onChange={handleInputEmail}></input>
                <input type='number' placeholder='Telefono' onChange={handleInputTel}></input>
                <button type='submit'>Enviar</button>
            </form>
        </>
    )
}

export default Form;