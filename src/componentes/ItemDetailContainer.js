import ItemDetail from "./ItemDetail";
import products from "./data/data.json";
import react, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const {itemId} = useParams();
  const getItems = () => {
      return new Promise((resolve, reject) => {
          const product = products.filter(product => product.id === itemId)[0];
          if (product) {
              resolve(product)
          }
          reject("No existe el producto")
      })
  }
  useEffect(() => {
      return getItems().then((data) => {
          setItem(data)
      }).catch((err) => {
          console.log(err)
      })
  }, [itemId])
  return <ItemDetail item={item}/>
}
export default ItemDetailContainer;
