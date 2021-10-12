import ItemDetail from "./ItemDetail";
import products from "./data/data.json";
import react, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
const [item, setItem] = useState({});
  const { id } = useParams();
  const getItems = () => {
    return new Promise((resolve, reject) => {
      const product = products.filter((product) => product.id == id)[0];
      if (product) {
        resolve(product);
      } else {
        reject("No existe el producto");
      }
    });
  };
  useEffect(() => {
    return getItems()
      .then((res) => {
        setItem(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return <ItemDetail item={item} />;
};
export default ItemDetailContainer;
