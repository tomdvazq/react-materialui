import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

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
    <Grid2 container spacing={2} sx={{border: 1}}>
      <Grid2 xs={6}>
        <Box
        component="img"
        src={img}
        alt={nombre}>

        </Box>
      </Grid2>
      <Grid2 xs={6}>
        <Typography variant="h2">{nombre}</Typography>
      </Grid2>
    </Grid2>
  </>;
};

export default ProductoDetail;
