import { useState, useEffect } from "react"
import { filtradoPorID } from "../../mocks/filters/filters"
import ProductoDetail from "../ProductoDetail/ProductoDetail"
import { useParams } from "react-router-dom";

const ProductoDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const {idProducto} = useParams();

    let perro = useEffect( () => {
        filtradoPorID(idProducto)
            .then(res => setProducto(res))
            .catch(err => alert('Producto no encontrado', err))
    }, [idProducto]);

  return (
    <ProductoDetail id={producto.id}/>
  )
}

export default ProductoDetailContainer