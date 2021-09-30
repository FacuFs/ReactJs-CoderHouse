const { useState } = require("react")


const ItemCount = ({stock, inicial})=>{
    const [contador, setContador]=useState(inicial);
    const [stockRestante, setStock]= useState(stock)
    
    const sumarCont = ()=>{
        if (contador<stockRestante) {
            setContador(parseInt(contador)+1);
        }
    }
    const restarCont = ()=>{
        if (contador>1) {
            setContador(contador-1);
        }
    }

    const comprar =()=>{
        setStock(parseInt(stockRestante)-contador)
        alert('Usted a comprado '+contador+' unidades del producto');
    }




    return(
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
            <button onClick={comprar}>Agregar al carrito</button>

        </div>
    )
}

export default ItemCount;