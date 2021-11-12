import { useState } from "react";
import "../App.css";
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
        <span>
          <p>{item.descripcion}</p>
          <p>Stock disponible: {item.stock}</p>
          <p>${item.precio}</p>
        </span>
        <ItemCount stock={item.stock} inicial="1" onAdd={onAdd}/>
      </div>
    </div>) 
    :
    <>
    <div className="itemDetailContainer">
      <div className="itemDetail">
        <h4>{item.nombre}</h4>
        <img src={item.img} className="item__img"></img>
        <span>
          <p>{item.descripcion}</p>
          <p>Stock disponible: {item.stock}</p>
          <p>${item.precio}</p>
        </span>
        <Link to="/Cart"className="btnDetalles">Ir al carrito</Link>
        <Link to="/" className="btnDetalles">SEGUIR COMPRANDO</Link>
      </div>
      
    </div>
     

     </>
    
    }

  </>
  )}

export default ItemDetail;
