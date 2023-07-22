import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import CartItem from "../CartItem/CartItem";
import "../Cart/Cart.css";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);

  cantidadTotal === 0 ? <p className>No hay productos en el carrito</p> : null;

  if (cantidadTotal === 0) {
    return (
      <div className="dontProducts">
        <p>No hay productos en el carrito</p>
        <Link to="/">Conocé nuestros productos</Link>
      </div>
    );
  }

  return (
    <div className="cartContainer">
      {carrito.map((producto) => (
        <CartItem key={producto.id} {...producto} />
      ))}
      <p>
        Usted está comprando {cantidadTotal}{" "}
        {cantidadTotal <= 1 ? "producto" : "productos"} por un precio de $
        {total} dólares
      </p>
      <Button color="error" onClick={() => vaciarCarrito()}>
        Vaciar carrito
      </Button>
      <Button color="success">
        <Link className="finishBuy" to="/checkout">
          Finalizar compra
        </Link>
      </Button>
    </div>
  );
};

export default Cart;
