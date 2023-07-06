import { useState, createContext } from "react";

export const CarritoContexto = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
})

export const CarritoProvider = () => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);
    
    const agregarProducto = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id)
    }
}