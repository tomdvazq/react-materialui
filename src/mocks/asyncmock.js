export const productosProyecto = [
    {
        id: 1,
        nombre: "Inferno Box",
        precio: 3,
        descripcion: "Embarcate a la suerte de ganar una Asyncmock Weapon",
        categoria: "Boxes",
        subcategoria: "",
        rareza: "Common",
        img: "/public/img/boxes/box-0.png"
    },
    {
        id: 2,
        nombre: "Assault Box",
        precio: 5,
        descripcion: "Embarcate a la suerte de ganar una Samuelin Weapon",
        categoria: "Boxes",
        subcategoria: "",
        rareza: "Common",
        img: "/public/img/boxes/box-1.png"
    },
    {
        id: 3,
        nombre: "Cuchillo Mariposa",
        precio: 990,
        descripcion: "Consigue tu Cuchillo Mariposa ★ StatTrak™ al mejor precio",
        categoria: "Skins",
        subcategoria: "Cuchillos",
        rareza: "Rare",
        img: "/public/img/skins/skin-0.png"
    },
    {
        id: 4,
        nombre: "Sticker | oskar (oro)",
        precio: 400,
        descripcion: "Autografiada por el jugador profesional Tomas Stastny",
        categoria: "Stickers",
        subcategoria: "Equipos",
        rareza: "Rare",
        img: "/public/img/stickers/sticker-0.png"
    },
]

export const getProductos = () => {
    return new Promise((respuesta) => {
        setTimeout( () => {
            respuesta(productosProyecto)
        }, 2000);
    })
}
