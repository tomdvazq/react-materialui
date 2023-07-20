import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Button } from "@mui/material";

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);

  return (
    <div className="productCart">
        <div className="productInfo">
          <div className="productImageCart">
            <img src={item.img} alt={item.nombre} />
          </div>
          <div className="productData">
            <h4> {item.nombre} </h4>
            <p>Comprando {cantidad} {cantidad <= 1 ? 'unidad' : 'unidades'}</p>
            <p>${item.precio} por unidad</p>
            <p>${item.precio * cantidad} total en {item.nombre}</p>
          </div>
        </div>
        <Button color="error" variant="contained" onClick={() => eliminarProducto(item.id)}>Eliminar</Button>
    </div>
  )
}

export default CartItem