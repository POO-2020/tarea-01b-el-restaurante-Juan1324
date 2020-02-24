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