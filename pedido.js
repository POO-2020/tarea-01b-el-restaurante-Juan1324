import Precio from "./precio.js";
import Cliente from "./cliente.js";
import Producto from "./producto.js";
import ElementoPedido from "./elementoPedido.js";

export default class Pedido{
    constructor(fecha,hora,cliente){
        this.fecha = fecha;
        this.hora = hora;
        this.cliente = cliente;
        this.NuelementosPedidos = []
    }
    getNumeroElementos(){
        return (`${this.NuelementosPedidos.length}`)
    }
    getNumeroProductos(){
        var productoNum = 0;
        this.NuelementosPedidos.forEach(elemento =>{
            productoNum += elemento.cantidad 
        })
        return (productoNum)
    }
}
