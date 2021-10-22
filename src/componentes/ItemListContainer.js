import ItemList from "./ItemList";
import { getFirestore } from "../firebase/index";
import react, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([0]);
  const { id: idCategory } = useParams();

const getBaseDatos = () =>{
  const bd = getFirestore();
  const itemCollection = bd.collection('productos');
  itemCollection.get().then((infoBaseDatos) => {
    if (infoBaseDatos.size === 0) {
      console.log('no hay datos');
    }
    setProductos(infoBaseDatos.docs.map(doc =>{
      return {id: doc.id, ...doc.data()}
    }))
  }).catch((error) =>{
    console.error('Error al traer los datos', error)
  })
}
  useEffect(() => {
    getBaseDatos();
  }, [idCategory]);
  return (
    <div className="itemContainer">
      <ItemList items={productos} />
    </div>
  );
};
export default ItemListContainer;
