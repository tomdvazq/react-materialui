import { useRef, useState } from "react"
import './AddSubstractProductCart.css'

const AddSubstractProductCart = () => {
    const [valor, setValor] = useState(1);
    const refCantidad = useRef();

    const add = () => {
        setValor(valor + 1);
    }

    const substract = () => {
        valor > 1 ? setValor(valor - 1) : setValor(1);
    }

  return (
    <div className="buttonContainer">
        <button onClick={substract}>-</button>
        <input ref={refCantidad} type="number" value={valor}/>
        <button onClick={add}>+</button>
    </div>
  )
}

export default AddSubstractProductCart