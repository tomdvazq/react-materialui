import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import { Button } from "@mui/material";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext);

    cantidadTotal === 0 ? <p>No hay productos en el carrito</p> : null

    if(cantidadTotal === 0) {
        return (
            <>
                <p>No hay productos en el carrito</p>
                <Link to="/">Ver productos</Link>
            </>
        )
    }

  return (
    <div>
        {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
        <p>Total: $ {total}</p>
        <p>Cantidad de productos a comprar: {cantidadTotal}</p>
        <Button onClick={() => vaciarCarrito()}>Vaciar carrito</Button>
        <Link to="/checkout">Finalizar compra</Link>
    </div>
  )
}

export default Cart