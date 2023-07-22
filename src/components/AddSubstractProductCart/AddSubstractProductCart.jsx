import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { Box, Button, Input } from "@mui/material";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

const AddSubstractProductCart = ({ item, cantidad, setCantidad }) => {
  const handleIncrement = () => {
    setCantidad(cantidad + 1);
  };

  const handleDecrement = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const { agregarProducto } = useContext(CarritoContext);

  const addToCart = () => {
    agregarProducto(item, cantidad);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box>
        <Button
          onClick={handleDecrement}
          variant="contained"
          color="error"
          sx={{ margin: 3 + "px" }}
        >
          <RemoveShoppingCartIcon />
        </Button>
        <Button
          onClick={handleIncrement}
          variant="contained"
          color="success"
          sx={{ margin: 3 + "px" }}
        >
          <AddShoppingCartIcon />
        </Button>
        <Button
          id="cantidadProducto"
          type="number"
          variant="outlined"
          sx={{ margin: 3 + "px" }}
        >
          {cantidad}
        </Button>
      </Box>
      <Box>
        <Button
          variant="contained"
          color="cart"
          sx={{ margin: 3 + "px", color: "white", width: 205 + "px" }}
          onClick={addToCart}
        >
          Añadir al carrito
        </Button>
      </Box>
    </Box>
  );
};

export default AddSubstractProductCart;
