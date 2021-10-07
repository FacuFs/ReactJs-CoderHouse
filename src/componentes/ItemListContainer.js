import ItemList from "./ItemList";
import products from "./data/data.json";
import react, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([0]);
  const { id: idCategory } = useParams();

  const getItem = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (idCategory) {
          const filtroCategory = products.filter(
            (item) => item.categoria === idCategory
          );
          resolve(filtroCategory);
        } else {
          resolve(products);
        }
        reject("error");
      }, 2000);
    });
  };

  useEffect(() => {
    setProductos([]);
    getItem().then((res) => setProductos(res));
  }, [idCategory]);
  return (
    <div className="itemContainer">
      <ItemList items={productos} />
    </div>
  );
};
export default ItemListContainer;
