import { useState, useEffect } from "react"
import { getProductos } from "../../mocks/asyncmock"
import Producto from "../Producto/Producto";
import { Box } from "@mui/material";

const ProductosContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect( () => {
    async function productosData(){
      const data = await getProductos();
      setProductos(data);
    }
    productosData();
  }, [])

  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      {productos.map((prod) => (
        <Producto key={prod.id} {...prod} />
      ))}
    </Box>
  )
}

export default ProductosContainer