import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

const Producto = ({id, nombre, precio, descripcion, categoria, rareza, img}) => {
  return (
    <Card sx={{maxWidth: 350, margin: 5+'px'}}>
      <CardMedia component="img" image={img} height={200} width={350}/>
      <Divider/>
      <CardContent>
        <Typography variant="h5">{nombre}</Typography>
        <Typography variant="body2">{descripcion}</Typography>
      </CardContent>
      <Divider light />
      <CardActions>
        <Button variant="contained" color="success"><AddShoppingCartIcon/></Button>
        <Button variant="contained" color="error"><RemoveShoppingCartIcon/></Button>
      </CardActions>
    </Card>
  )
}

export default Producto