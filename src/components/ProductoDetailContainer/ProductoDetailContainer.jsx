import { useState, useEffect } from "react";
import { filtrarInformacionPorID } from "../../mocks/filters/filters";
import ProductoDetail from "../ProductoDetail/ProductoDetail";
import { useParams } from "react-router-dom";

const ProductoDetailContainer = () => {
    const [productos, setProductos] = useState(null);
    const {idProd} = useParams();

    useEffect( () => {
        filtrarInformacionPorID(Number(idProd))
            .then(res => setProductos(res))
            .catch(err => console.log('Error', err))
    }, [idProd])

  return (
    <>
        <ProductoDetail  {...productos}/>
    </>
  )
}

export default ProductoDetailContainer