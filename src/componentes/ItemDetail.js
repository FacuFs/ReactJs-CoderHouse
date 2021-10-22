import { useState } from "react";
import ItemCount from "./ItemCount";
import { CartContextUse } from "./context/CartContext";
import { Link } from "react-router-dom";


const ItemDetail = ({ item }) => {
  const {addItem, clearCart, removeItem} = CartContextUse();
  const [isEstado, setEstado] = useState(true);

  const onAdd = (cant) =>{
    addItem(item, parseInt(cant))
    setEstado()
  }

  return (
    <> 
    {isEstado ? (<div className="itemDetailContainer">
      <div className="itemDetail">
        <h4>{item.nombre}</h4>
        <img src={item.img} className="item__img"></img>
        <p>{item.descripcion}</p>
        <p>Stock disponible: {item.stock}</p>
        <p>${item.precio}</p>
        <ItemCount stock={item.stock} inicial="1" onAdd={onAdd}/>
      </div>
    </div>) 
    :
    <>
    <div className="itemDetailContainer">
      <div className="itemDetail">
        <h4>{item.nombre}</h4>
        <img src={item.img} className="item__img"></img>
        <p>{item.descripcion}</p>
        <p>Stock disponible: {item.stock}</p>
        <p>${item.precio}</p>
      </div>
    </div>
     <Link to="/Cart"><button>Ir al carrito</button></Link>
     <Link to="/"><button>SEGUIR COMPRANDO</button></Link>

     </>
    
    }

  </>
  )}

export default ItemDetail;
