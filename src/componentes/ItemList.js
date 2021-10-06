import Item from "./Item.js"

const ItemList = ({items}) =>{
    
    return(
        <>
        {items.length ? (
            items.map((producto)=> <Item item={producto} key={producto.id}/>)
        ) : (
            <p>Cargando...</p>
        )}
        </>
    )
}

export default ItemList;