import ItemList from "./ItemList"
import products from "./data/data.json"
import { useEffect, useState } from "react"

const ItemListContainer = () =>{
    
    const [productos, setProductos]= useState(0);

    useEffect(()=>{


        const productData=new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(products);
            },2000);
        });

        productData.then((res)=>{
            setProductos(res);
        });
    

    });
    return (
        <>
            <ItemList items={productos}/>
        </>
    )

}
export default ItemListContainer;