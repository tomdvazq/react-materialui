import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Button } from "@mui/material";

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);

  return (
    <div>
        <h4> {item.nombre} </h4>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: {item.precio}</p>
        <Button onClick={() => eliminarProducto()}>Eliminar</Button>
    </div>
  )
}

export default CartItem