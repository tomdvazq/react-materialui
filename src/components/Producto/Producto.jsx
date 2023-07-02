import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from "@mui/material"
import AddSubstractProductCart from "../AddSubstractProductCart/AddSubstractProductCart";

const Producto = ({id, nombre, precio, descripcion, categoria, rareza, img}) => {
  return (
    <Card sx={{maxWidth: 350, margin: 5+'px'}}>
      <CardMedia component="img" image={img} height={'auto'} width={150}/>
      <Divider/>
      <CardContent>
        <Typography variant="h5">{nombre}</Typography>
        <Typography variant="body2">{descripcion}</Typography>
      </CardContent>
      <Divider light />
      <CardActions>
        <AddSubstractProductCart/>
      </CardActions>
    </Card>
  )
}

export default Producto