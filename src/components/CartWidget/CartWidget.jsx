import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import '../CartWidget/CartWidget.css';

const CartWidget = ({navArrayLinks}) => {
    const {cantidadTotal} = useContext(CarritoContext);

  return (
    <div id="cart">
      {navArrayLinks.map((item) =>
        item.isCart ? ( 
          <Button
            sx={{ color: "white" }}
            key={item.title}
            className="cart"
            component={NavLink}
            to={item.path}
          >
            {item.title}
            {cantidadTotal > 0 ? <strong>{cantidadTotal}</strong> : null}
          </Button>
        ) : null
      )}
    </div>
  );
};

export default CartWidget;
