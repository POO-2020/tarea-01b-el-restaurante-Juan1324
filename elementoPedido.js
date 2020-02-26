import Producto from "./producto.js"
export default class ElementoPedido{

    constructor(cantidad, producto){
        this.producto = producto;
        this.cantidad = cantidad;
    }
    
    getDescripcion(){
        return (`${this.cantidad} x ${this.producto.getDescripcion()}`);
    }
}