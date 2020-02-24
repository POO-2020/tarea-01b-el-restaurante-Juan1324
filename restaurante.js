import Direccion from "./direccion.js"
export default class Restaurante{

    constructor(nombre,telefono,direccion){
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
        this.productos = []
        this.pedidos = []
    }
    registrarProducto(producto){  
        this.productos.push(producto)
    }
}