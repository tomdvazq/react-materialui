import { useState, useEffect } from "react";
import { filtradoPorID } from "../../mocks/filters/filters";
import ProductoDetail from "../ProductoDetail/ProductoDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from 'firebase/firestore';
import { db } from "../../services/config";

const ProductoDetailContainer = () => {
    const [productos, setProductos] = useState(null);
    const {idProd} = useParams();

    useEffect(() => {
      const nuevoDoc = doc(db, 'inventario', idProd);
      getDoc(nuevoDoc)
        .then( res => {
          const data = res.data();
          const nuevoProducto = {id: res.id, ...data};
          setProductos(nuevoProducto);
        })
        .catch( err => console.log('Error', err))
    },[idProd])
  return (
    <>
        <ProductoDetail  {...productos}/>
    </>
  )
}

export default ProductoDetailContainer