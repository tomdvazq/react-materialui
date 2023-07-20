import { Box, Typography } from "@mui/material";
import "../ProductoDetail/ProductoDetail.css";
import AddSubstractProductCart from "../AddSubstractProductCart/AddSubstractProductCart"; 

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
            <AddSubstractProductCart item={{id, nombre, precio}}/>
            <Typography variant="span">$ {precio}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductoDetail;
