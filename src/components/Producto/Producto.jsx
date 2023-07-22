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
import { Link } from "react-router-dom";
import '../Producto/Producto.css'
import { useState } from "react";

const Producto = ({
  id,
  nombre,
  precio,
  descripcion,
  categoria,
  rareza,
  img,
}) => {

  const [cantidad, setCantidad] = useState(1);
  
  return (
    <Card className="productHome" sx={{ maxWidth: 250, margin: 10 + "px", position: "relative"}}>
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
        <AddSubstractProductCart cantidad={cantidad} setCantidad={setCantidad} item={{id, nombre, precio, img}}/>
      </CardActions>
      <Link className="moreData" to={`/producto/${id}`}>Más información</Link>
    </Card>
  );
};

export default Producto;
