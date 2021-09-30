import Item from "./Item.js"

const ItemList = ({items}) =>{
    
    return(
        <>
        {items.length ? (
            items.map((e)=> <Item item={e}/>)
        ) : (
            <p>no encontrado</p>
        )}
        </>
    )
}

export default ItemList;