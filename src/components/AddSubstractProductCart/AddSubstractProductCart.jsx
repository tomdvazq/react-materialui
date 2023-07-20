import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { Box, Button, Input } from "@mui/material";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

const AddSubstractProductCart = ({item}) => {
  const [valor, setValor] = useState(1);

  const add = () => {
    setValor(valor + 1);
  };

  const substract = () => {
    valor > 1 ? setValor(valor - 1) : setValor(1);
  };

  const {agregarProducto} = useContext(CarritoContext);

  const addToCart = () => {
    agregarProducto(item, valor);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column"}}>
      <Box>
        <Button
          onClick={substract}
          variant="contained"
          color="error"
          sx={{ margin: 3 + "px" }}
        >
          <RemoveShoppingCartIcon />
        </Button>
        <Button
          onClick={add}
          variant="contained"
          color="success"
          sx={{ margin: 3 + "px" }}
        >
          <AddShoppingCartIcon />
        </Button>
        <Button
          type="number"
          variant="outlined"
          sx={{ margin: 3 + "px" }}
        >
          {valor}
        </Button>
      </Box>
      <Box>
        <Button
          variant="contained"
          color="cart"
          sx={{ margin: 3 + "px", color: 'white', width: 205 + 'px'}}
          onClick={addToCart}
        >
          Añadir al carrito
        </Button>
      </Box>
    </Box>
  );
};

export default AddSubstractProductCart;
