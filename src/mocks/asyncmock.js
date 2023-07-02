const productosProyecto = [
    {
        id: 1,
        nombre: "Inferno Box",
        precio: 3,
        descripcion: "Embarcate a la suerte de ganar una Asyncmock Weapon",
        categoria: "Boxes",
        rareza: "Common",
        img: "./public/img/boxes/box-0.png"
    },
    {
        id: 2,
        nombre: "Assault Box",
        precio: 5,
        descripcion: "Embarcate a la suerte de ganar una Flavia Weapon",
        categoria: "Boxes",
        rareza: "Common",
        img: "./public/img/boxes/box-1.png"
    },
]

export const getProductos = () => {
    return new Promise((respuesta) => {
        setTimeout( () => {
            respuesta(productosProyecto)
        }, 2000);
    })
}