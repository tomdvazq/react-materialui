const productosProyecto = [
    {
        id: 1,
        nombre: "Inferno Box",
        precio: 3,
        descripcion: "Embarcate a la suerte de ganar una Asyncmock Weapon",
        categoria: "Boxes",
        rareza: "Common",
        img: "https://via.placeholder.com/350x200"
    },
    {
        id: 2,
        nombre: "Assault Box",
        precio: 5,
        descripcion: "Embarcate a la suerte de ganar una Flavia Weapon",
        categoria: "Boxes",
        rareza: "Common",
        img: "https://via.placeholder.com/350x200"
    },
]

export const getProductos = () => {
    return new Promise((respuesta) => {
        setTimeout( () => {
            respuesta(productosProyecto)
        }, 2000);
    })
}