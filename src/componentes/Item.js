import ItemDetail from "./ItemDetail";
import ItemDetailContainer from "./ItemDetailContainer";

const Item = ({ item }) => {
  return (
    <div className="item">
      <h4>{item.nombre}</h4>
      <img src={item.img} className="item__img"></img>
      <p>{item.descripcion}</p>
      <p>Stock disponible: {item.stock}</p>
      <p>${item.precio}</p>
      <button>Detalles del producto</button>
    </div>
  );
};

export default Item;
