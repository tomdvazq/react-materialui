import { useRef, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { Box, Button, Input } from "@mui/material";

const AddSubstractProductCart = () => {
  const [valor, setValor] = useState(1);
  const refCantidad = useRef();

  const add = () => {
    setValor(valor + 1);
  };

  const substract = () => {
    valor > 1 ? setValor(valor - 1) : setValor(1);
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
          inputRef={refCantidad}
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
        >
          Añadir al carrito
        </Button>
      </Box>
    </Box>
  );
};

export default AddSubstractProductCart;
