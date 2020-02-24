import Direccion from "./direccion.js"
import Cliente from "./cliente.js"
import Tiempo from "./tiempo.js"
import Precio from "./precio.js"
import Producto from "./producto.js"
import ElementoPedido from "./elementoPedido.js"
import Fecha from "./fecha.js"
import Pedido from "./pedido.js"

class Main{
    constructor(){
        
        this.direccion1=new Direccion("Bahía de Manzanillo","#234","#234-A","Solidaridad","29878","Villa de Álvarez","Villa de Álvarez")
        this.cliente1= new Cliente("Omar Pérez",this.direccion1,"312-109-1987")
        this.hora1= new Tiempo(3,40,"pm")
        this.valor=new Precio(10.51)
        this.producto=new Producto("Galletas",this.valor)
        this.elementoPedido=new ElementoPedido(12,this.producto)
        this.años=new Fecha(2,2,2001)
        this.valor2=new Precio(1000.903)
        this.valor3=new Precio(42.903)
        this.elementoPedido1=new ElementoPedido(12,this.producto)
        this.cantidad=(15)
        this.cantidad2=(3)
        this.cantidad3=(1)
        this.pedido1= new Pedido(new Fecha(13,7,2020),new Tiempo(4,45,"pm"),new Cliente(this.cliente1))

 
    }
    probarTiempo(){
    console.log("////////////////////Tiempo///////////////////////////////////")
    console.log(this.hora1.getFormato12())
    console.log(this.hora1.getFormato24())

    }
    probarFecha(){
        console.log("////////////////////Fecha///////////////////////////////////")
        console.log(`Años: ${this.años.getAños()}`);
        console.log(`Meses: ${this.años.getMeses()}`);
        console.log(`Semana: ${this.años.getSemanas()}`);
        console.log(`Dias: ${this.años.getDias()}`);
        console.log(`Fecha: ${this.años.getFecha()}`);
        console.log(`Dia de la semana: ${this.años.getDiaFecha()}`);
    }
    probarCliente(){
        console.log("////////////////////Cliente///////////////////////////////////")
        console.log(`${this.cliente1.getPerfil()}`);

    }
    probarDireccion(){
    console.log("////////////////////Direccion///////////////////////////////////")
    console.log(this.direccion1.getFormatoCorto())
    console.log(this.direccion1.getFormatoExtendido())
    }
    probarPrecio(){
        console.log("////////////////////Precio///////////////////////////////////") 
        console.log(this.valor.getPrecio())
    }
    probarProducto(){
        console.log("////////////////////Producto///////////////////////////////////") 
        console.log(this.producto.getDescripcion())
    }
    probarElementoPedido(){
        console.log("////////////////////Elementos pedidos///////////////////////////////////") 
        console.log(this.elementoPedido.getDescripcion())
    }
    probarPedido(){
        this.elemento = new ElementoPedido(this.cantidad,new Producto("Pescado Frito", this.valor2))
        this.elemento2 = new ElementoPedido(this.cantidad2,new Producto("Agua de coco", this.valor3))
        this.elemento3 = new ElementoPedido(this.cantidad3,new Producto("Pizza chica", this.valor3))
        this.pedido1.agregarElemento(this.elemento)
        this.pedido1.agregarElemento(this.elemento2)
        this.pedido1.agregarElemento(this.elemento3)
        console.log("////////////////////Pedidos///////////////////////////////////") 
        console.log("En total son:" + this.pedido1.getNumeroElementos() + " productos distintos")
        console.log("En total son: " + this.pedido1.getNumeroProductos()+ " productos") 
        this.pedido1.listarElementos()
        console.log(this.pedido1.getResumen())
        console.log("El Total a pagar es de " + this.pedido1.getCostoTotal())
    }
}
let app=new Main();
app.probarCliente();
app.probarTiempo();
app.probarFecha();
app.probarDireccion();
app.probarPrecio();
app.probarProducto();
app.probarElementoPedido();
app.probarPedido();
