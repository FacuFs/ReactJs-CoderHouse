import { Link } from "react-router-dom";

const { useState } = require("react")


const ItemCount = ({stock, inicial})=>{
    const [contador, setContador]=useState(inicial);
    const [stockRestante, setStock]= useState(stock)
    const [isEstado, setEstado] = useState(true);

    const sumarCont = ()=>{
        if (contador<stock) {
            setContador(parseInt(contador)+1);
        }
    }
    const restarCont = ()=>{
        if (contador>inicial) {
            setContador(contador-1);
        }
    }
    const onAdd = (e, input) => {
        e.preventDefault();
        //console.log(input.value)
        setEstado()
        console.log("agrega Item al carro");
    }





    return(
        <>

        {isEstado ?
            <div className="containerContador">
                <div className="containerContador__control">
                    <div onClick={restarCont}>
                        <p>-</p>
                    </div>
                    <div className="contador">
                        <p> {contador}</p>
                    </div>
                    <div onClick={sumarCont}>
                        <p>+</p>
                    </div>
                </div>
                <button onClick={onAdd}>Agregar al carrito</button>
            </div>
            :
            <div>
                <Link to="/Cart">Ir al carrito</Link>
            </div>
        }
        </>
    )
}

export default ItemCount;