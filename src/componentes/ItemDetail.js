import ItemCount from "./ItemCount";
import ItemDetailContainer from "./ItemDetailContainer";

const ItemDetail = ({ item }) => {
  return (
    <div className="itemDetailContainer">
      <div className="itemDetail">
        <h4>{item.nombre}</h4>
        <img src={item.img} className="item__img"></img>
        <p>{item.descripcion}</p>
        <p>Stock disponible: {item.stock}</p>
        <p>${item.precio}</p>
        <button>Detalles del producto</button>
        <ItemCount stock={item.stock} inicial="1" />
      </div>
    </div>
  );
};

export default ItemDetail;
