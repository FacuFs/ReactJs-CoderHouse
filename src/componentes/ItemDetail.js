import ItemCount from "./ItemCount";
import ItemDetailContainer from "./ItemDetailContainer";
import products from "./data/data.json"

const ItemDetail = ({ item }) => {
  console.log(item)
  return (
    <>
    {item ? (<div className="itemDetailContainer">
      <div className="itemDetail">
        <h4>{item.nombre}</h4>
        <img src={item.img} className="item__img"></img>
        <p>{item.descripcion}</p>
        <p>Stock disponible: {item.stock}</p>
        <p>${item.precio}</p>
        <ItemCount stock={item.stock} inicial="1" />
      </div>
    </div>) : (<p>cargando...</p>)
    }

  </>
  )}

export default ItemDetail;
