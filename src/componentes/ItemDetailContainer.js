import ItemDetail from "./ItemDetail";
import react, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFirebase, getFirestore } from "../firebase";

const ItemDetailContainer = () => {
const [item, setItem] = useState({});
  const { id } = useParams();


  useEffect(() => {
    const getDetail = async () => {
      const { docs } = await getFirestore().collection("productos").get();
       const newArray = docs.map((item) => ({ id: item.id, ...item.data() }));
      const findProduct = newArray.find((item) => item.id === id);
      setItem(findProduct);
    };

    getDetail();
  }, [id]);

  return <ItemDetail item={item} />;
};
export default ItemDetailContainer;
