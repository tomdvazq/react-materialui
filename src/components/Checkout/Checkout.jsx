import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"
import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material"

const Checkout = () => {
    const {carrito, vaciarCarrito, cantidadTotal} = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [celular, setCelular] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion,setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const manejadorFormulario = (e) => {
        e.preventDefault();
        // Validaciones
        if (!nombre || !apellido || !celular || !email || !emailConfirmacion) {
            setError('Algún campo del formulario quedó vacío, reviselo y complételo.');
            return;
        }

        if (email !== emailConfirmacion) {
            setError('Los campos de email no coinciden.');
            return;
        }
        // Checkout
        const orden = {
            items: carrito.map(prod => ({
                id: prod.item.id,
                nombre: prod.item.nombre,
                cantidad: prod.cantidad
            })),
            total: cantidadTotal,
            nombre,
            apellido,
            telefono,
            email
        };
        // Guardamos la orden en Firebase
        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch(error => {
                console.log("Error al procesar la compra", error)
                setError("Error al procesar la compra, intente nuevamente en unos minutos");
            });
    }

  return (
    <div>
        <h5>Checkout</h5>
        {carrito.map(prod => (
            <div>
                <h3>{prod.item.nombre}</h3> x <span>{prod.cantidad}</span>
                <p>Precio: {prod.item.precio}</p>
                <hr/>
            </div>
        ))}
        <hr/>

        <form onSubmit={manejadorFormulario}>
            <FormControl>
                <InputLabel htmlFor={nombre}>Nombre</InputLabel>
                <Input type="text" aria-describedby="my-helper-text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>

            <FormControl>
                <InputLabel htmlFor={apellido}>Apellido</InputLabel>
                <Input type="text" aria-describedby="my-helper-text" value={apellido} onChange={(e) => setApellido(e.target.value)}/>
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>

            <FormControl>
                <InputLabel htmlFor={celular}>Teléfono</InputLabel>
                <Input type="text" aria-describedby="my-helper-text" value={celular} onChange={(e) => setCelular(e.target.value)}/>
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>

            <FormControl>
                <InputLabel htmlFor={email}>Email</InputLabel>
                <Input type="email" aria-describedby="my-helper-text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>

            <FormControl>
                <InputLabel htmlFor={emailConfirmacion}>Confirma tu email</InputLabel>
                <Input type="email" aria-describedby="my-helper-text" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)}/>
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>

            {
                error && <p>Error {error}</p>
            }

            <button type="submit">Finalizar compra</button>
        </form>

        { 
            ordenId && ( 
            <strong>¡Gracias por tu compra! Tu número de órden es {ordenId}</strong>
             )
        }
    </div>
  )
}

export default Checkout