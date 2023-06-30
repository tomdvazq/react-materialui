const productosProyecto = [
    {
        id: 1,
        nombre: "",
        precio: "",
        descripcion: "",
        categoria: "",
        rareza: "",
    },
]

export const getProductos = () => {
    return new Promise((respuesta) => {
        setTimeout( () => {
            respuesta(getProductos)
        }, 2000);
    })
}