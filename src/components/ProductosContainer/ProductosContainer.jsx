import { useState, useEffect } from "react"
import { getProductos } from "../../mocks/asyncmock"
import { filtradoPorCategoria, filtradoPorID, filtradoPorSubCategoria } from "../../mocks/filters/filters";
import Producto from "../Producto/Producto";
import { Box, Button } from "@mui/material";

const ProductosContainer = () => {
  const [productos, setProductos] = useState([]);
  const [categoriaFiltrada, setCategoriaFiltrada] = useState('');

  useEffect( () => {
    async function productosData(){
      const data = await getProductos();

      // Aplicar filtro solo sí hay una categoría seleccionada

      const productosFiltrados = categoriaFiltrada
      ? filtradoPorCategoria(categoriaFiltrada, data)
      : data;

    setProductos(productosFiltrados);
    }
    productosData();
  }, [categoriaFiltrada])

  return (
      <Box sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
        {productos.map((prod) => (
          <Producto key={prod.id} {...prod} />
        ))}
      </Box>
  )
}

export default ProductosContainer