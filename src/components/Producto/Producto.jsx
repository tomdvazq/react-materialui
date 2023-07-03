import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import AddSubstractProductCart from "../AddSubstractProductCart/AddSubstractProductCart";

const Producto = ({
  id,
  nombre,
  precio,
  descripcion,
  categoria,
  rareza,
  img,
}) => {
  return (
    <Card sx={{ maxWidth: 250, margin: 5 + "px", position: "relative" }}>
      <CardMedia component="img" image={img} height={"auto"} width={150} />
      <Box
        variant="outlined"
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          padding: 3 + "px",
          borderBottom: 1,
          borderLeft: 1,
          borderColor: "#00000010",
          fontWeight: "bold",
        }}
      >
        U$S {precio}
      </Box>
      <Divider />
      <CardContent>
        <Typography variant="h5">{nombre}</Typography>
        <Typography variant="body2">{descripcion}</Typography>
      </CardContent>
      <Divider light />
      <CardActions>
        <AddSubstractProductCart />
      </CardActions>
    </Card>
  );
};

export default Producto;
