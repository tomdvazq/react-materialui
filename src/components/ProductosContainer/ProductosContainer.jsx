import { useState, useEffect, useContext } from "react";
import { getProductos } from "../../mocks/asyncmock";
import { filtradoPorCategoria } from "../../mocks/filters/filters";
import Producto from "../Producto/Producto";
import { Box, Button } from "@mui/material";
import { CarritoContext } from "../../context/CarritoContext";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../services/config";
import { useParams } from "react-router-dom";

const ProductosContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();
  const [categoriaFiltrada, setCategoriaFiltrada] = useState('');

  useEffect(() => {
    const misProductos = idCategoria ? query(collection(db, 'inventario'), where ("idCat", "==", idCategoria)) : collection(db, 'inventario');
    getDocs(misProductos)
      .then( res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data();
          return {id: doc.id, ...data}
        })
      })
      .catch( err => console.log('Error', err))
  },[idCategoria])

  const {carrito} = useContext(CarritoContext);

  useEffect( () => {
    console.log("Carrito actualizado:", carrito);
  }, [carrito])

  return (
      <Box sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
        {productos.map((prod) => (
          <Producto key={prod.id} {...prod} />
        ))}
      </Box>
  )
}

export default ProductosContainer