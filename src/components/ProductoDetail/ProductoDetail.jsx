import { Typography } from "@mui/material";

const ProductoDetail = ({
  id,
  nombre,
  precio,
  categoria,
  subcategoria,
  rareza,
  img
}) => {
  return <>
    {nombre} {precio}
  </>;
};

export default ProductoDetail;
