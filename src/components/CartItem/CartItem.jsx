import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"

const CartItem = () => {
    const {eliminarProducto} = useContext(CarritoContext);
  return (
    <div>CartItem</div>
  )
}

export default CartItem