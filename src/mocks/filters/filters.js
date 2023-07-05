import { productosProyecto } from "../asyncmock";

// Filtro por ID
// export const filtradoPorID = (id) => {
//     return productosProyecto.find((producto) => producto.id === id)
// }

export const filtradoPorID = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = productosProyecto.find((producto) => producto.id === id);
            resolve(producto);
        }, 2000)
    })
}

// Filtro por Categoría

export const filtradoPorCategoria = (categoria) => {
    return productosProyecto.filter((producto) => producto.categoria === categoria)
}

// Filtro por SubCategoría

export const filtradoPorSubCategoria = (subcategoria) => {
    return productosProyecto.filter((producto) => producto.subcategoria === subcategoria)
}

// Filtro por Precio

export const filtradoPorPrecio = (precio) => {
    return productosProyecto.filter((producto) => producto.precio === precio)
}