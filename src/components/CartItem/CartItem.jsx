import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Button } from "@mui/material";

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);

  return (
    <div>
        <h4> {item.nombre} </h4>
        <span>Cantidad: {item.cantidad}</span>
        <span>PRecio: {item.precio}</span>
        <Button onClick={() => eliminarProducto()}>Eliminar</Button>
    </div>
  )
}

export default CartItem