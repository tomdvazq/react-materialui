import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

const Producto = ({id, nombre, precio, descripcion, categoria, rareza, img}) => {
  return (
    <Card sx={{maxWidth: 350, margin: 5+'px'}}>
      <CardMedia component="img" image={img} height={200} width={350}/>
      <CardContent>
        <Typography variant="h5">{nombre}</Typography>
        <Typography variant="body2">{descripcion}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="success">Add to cart</Button>
        <Button color="error">Remove</Button>
      </CardActions>
    </Card>
  )
}

export default Producto