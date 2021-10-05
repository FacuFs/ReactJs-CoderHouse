import ItemList from "./ItemList";
import products from "./data/data.json";
import react, { useEffect, useState } from "react";

const ItemListContainer = () => {
  const [productos, setProductos] = useState(0);

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
    <div className="itemContainer">
      <ItemList items={productos} />
    </div>
  );
};
export default ItemListContainer;
