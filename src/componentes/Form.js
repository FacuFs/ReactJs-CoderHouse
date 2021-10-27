import react, { useState } from "react";
import { CartContextUse } from "./context/CartContext";


const Form = () =>{
    const { carritoVacio, cart, clearCart, removeItem } = CartContextUse();
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState(0);
    const [email, setEmail] = useState('');
    
    const handleInputName = ({target}) => setNombre(target.value)
    const handleInputTel = ({target}) => setTelefono(target.value)    
    const handleInputEmail = ({target}) => setEmail(target.value)

    const handleSubmit = (e) =>{
        e.preventDefault();

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