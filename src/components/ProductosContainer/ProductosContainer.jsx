import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Producto from "../Producto/Producto";
import { collection, getDocs, query } from 'firebase/firestore'
import { Box, Button } from "@mui/material";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";

const ProductosContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const misProductos = idCategoria ? query(collection(db, 'inventario'), where ("categoria", "==", idCategoria)) : collection(db, 'inventario');
    getDocs(misProductos)
      .then( res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data();
          return {id: doc.id, ...data}
        })
        setProductos(nuevosProductos);
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