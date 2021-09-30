import ItemCount from "./ItemCount"

const Item=({item})=>{

    return(
        <div className="itemContainer">
            <div className="item">
                <h4>{item.nombre}</h4>
                <img src={item.img} className="item__img"></img>
                <p>{item.descripcion}</p>
                <p>Stock disponible: {item.stock}</p>
                <p>${item.precio}</p>
                <button>Detalles del producto</button>
                <ItemCount stock={item.stock} inicial="1"/>
            </div>
        </div>
    )
}

export default Item;