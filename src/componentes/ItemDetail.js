import ItemCount from "./ItemCount";
import { CartContextUse } from "./context/CartContext";


const ItemDetail = ({ item }) => {
  const {addItem, clearCart, removeItem} = CartContextUse();

  const onAdd = (cant) =>{
    addItem(item, parseInt(cant))

  }

  return (
    <> 
    {item ? (<div className="itemDetailContainer">
      <div className="itemDetail">
        <h4>{item.nombre}</h4>
        <img src={item.img} className="item__img"></img>
        <p>{item.descripcion}</p>
        <p>Stock disponible: {item.stock}</p>
        <p>${item.precio}</p>
        <ItemCount stock={item.stock} inicial="1" onAdd={onAdd}/>
        
        <button onClick={clearCart}>Borrar todo el carrito</button>
      </div>
    </div>) : (<p>cargando...</p>)
    }

  </>
  )}

export default ItemDetail;
