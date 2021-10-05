import react, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import products from "./data/data.json";

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    productData.then((res) => {
      setProductos(res);
    });
  });
  return (
    <>
      <ItemDetail items={productos} />
    </>
  );
};
export default ItemDetailContainer;
