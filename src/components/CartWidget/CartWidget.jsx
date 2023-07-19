import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const CartWidget = ({navArrayLinks}) => {
    const {cantidadTotal} = useContext(CarritoContext);
  return (
    <div>
      {navArrayLinks.map((item) =>
        item.isCart ? ( // Utilizamos la propiedad isCart para identificar el elemento del carrito
          <Button
            sx={{ color: "white" }}
            key={item.title}
            component={NavLink}
            to={item.path}
          >
            {item.title}
          </Button>
        ) : null
      )}
    </div>
  );
};

export default CartWidget;
