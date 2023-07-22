import { Box, Typography } from "@mui/material";
import "../ProductoDetail/ProductoDetail.css";
import AddSubstractProductCart from "../AddSubstractProductCart/AddSubstractProductCart"; 
import { useState, useEffect } from "react";

const ProductoDetail = ({
  id,
  nombre,
  descripcion,
  precio,
  categoria,
  subcategoria,
  rareza,
  img,
}) => {
  const colors = (rareza) => {
    if (rareza === 'Common') {
      return 'common';
    } else {
      return 'rare';
    }
  }

  const [cantidad, setCantidad] = useState(1);

  return (
    <>
      <Box className="containerProductoDetail">
        <Box
          component="img"
          className="imagenProducto"
          src={img}
          alt={nombre}
        ></Box>
        <Box className="producto">
          <Box className="title">
            <Typography variant="h2">{nombre}</Typography>
            <Typography variant="span" className={colors(rareza)}>{rareza}</Typography>
          </Box>
          <Typography className="description" variant="p">{descripcion}</Typography>
          <Box className="buy">
            <AddSubstractProductCart cantidad={cantidad} setCantidad={setCantidad} item={{id, nombre, precio, img}}/>
            <Typography variant="span">$ {precio * cantidad}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductoDetail;
