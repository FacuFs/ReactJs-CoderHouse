import { Link } from "react-router-dom";

const Item = ({ item }) => {


  return (

    <div className="item">
      <h4>{item.nombre}</h4>
      <h4>{item.id}</h4>
      <img src={item.img} className="item__img"></img>
      <p>{item.descripcion}</p>
      <p>Stock disponible: {item.stock}</p>
      <p>${item.precio}</p>
      <Link to={"/item/" + item.id} className="btnDetalles">Detalles del producto</Link>
    </div>
  );
};

export default Item;
