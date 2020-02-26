import Direccion from "./direccion.js"
import Cliente from "./cliente.js"
import Tiempo from "./tiempo.js"
import Precio from "./precio.js"
import Producto from "./producto.js"
import ElementoPedido from "./elementoPedido.js"
import Fecha from "./fecha.js"
import Pedido from "./pedido.js"
import Restaurante from "./restaurante.js"

class Main{
    constructor(){
        
        this.direccion1=new Direccion("Bahía de Manzanillo","#234","#234-A","Solidaridad","29878","Villa de Álvarez","Villa de Álvarez");
        this.direccion2=new Direccion("Francisco Villa","#345","#198-B","Huertas del Sol",123,"Colima","Colima");
        this.direccion3=new Direccion("Francisco Soto","#35","#18-A","Paraiso azul",423,"Coquimatlan","Colima");

        this.cliente1= new Cliente("Omar Pérez",this.direccion1,"312-109-1987");
        this.cliente2=new Cliente("Gregorio Garcia",this.direccion2,"312-321-3445");
        this.cleiente3=new Cliente("Sahra Guzman", this.direccion3,"312.109.3234");


        this.valor=new Precio(10.51);

        this.producto=new Producto("Galletas",this.valor);
        this.elementoPedido=new ElementoPedido(12,this.producto);
        this.elementoPedido1=new ElementoPedido(10,this.producto);

        this.años=new Fecha(2,2,2001);

        this.valor2=new Precio(1000.903);
        this.valor3=new Precio(42.903);

        this.cantidad=(15);
        this.cantidad2=(3);
        this.cantidad3=(1);

        this.pedido= new Pedido( new Fecha(30,9,2003), new Tiempo(12,30,"pm"),new Cliente(this.cliente1));
        this.pedido2= new Pedido( new Fecha(11,11,2000), new Tiempo(12,30,"pm"),new Cliente(this.cliente1));
        this.pedido3= new Pedido( new Fecha(1,12,2000), new Tiempo(12,30,"pm"),new Cliente(this.cliente2));


        this.producto1=new Producto("Tacos",this.valor);
        this.producto2=new Producto("Ensalada",this.valor2);
        this.producto3=new Producto("Pastel",this.valor3);
        this.restaurante=new Restaurante("La casa del colimnote",312-156-8934,"Bahía de Miramar #241");
    }
    probarTiempo(){
    let hora1 =new Tiempo(2,"03","pm");
    console.log("////////////////////Tiempo///////////////////////////////////")
    console.log(hora1.getFormato12());
    console.log(hora1.getFormato24());
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
    console.log(this.direccion1.getFormatoCorto());
    console.log(this.direccion1.getFormatoExtendido());
    }
    probarPrecio(){
        console.log("////////////////////Precio///////////////////////////////////") 
        console.log(this.valor.getPrecio());
    }
    probarProducto(){
        console.log("////////////////////Producto///////////////////////////////////") 
        console.log(this.producto.getDescripcion());
    }
    probarElementoPedido(){
        console.log("////////////////////Elementos pedidos///////////////////////////////////") 
        console.log(this.elementoPedido.getDescripcion());
    }
    probarPedido(){
        this.elemento = new ElementoPedido(this.cantidad,new Producto("Pescado Frito", this.valor2));
        this.elemento2 = new ElementoPedido(this.cantidad2,new Producto("Agua de coco", this.valor3));
        this.elemento3 = new ElementoPedido(this.cantidad3,new Producto("Pizza chica", this.valor3));
        this.pedido.agregarElemento(this.elemento);
        this.pedido.agregarElemento(this.elemento2);
        this.pedido.agregarElemento(this.elemento3);
        console.log("////////////////////Pedidos///////////////////////////////////") 
        console.log("En total son:" + this.pedido.getNumeroElementos() + " productos distintos");
        console.log("En total son: " + this.pedido.getNumeroProductos()+ " productos"); 
        this.pedido.listarElementos();
        console.log(this.pedido.getResumen());
        console.log("El Total a pagar es de " + this.pedido.getCostoTotal());
    }
    probarRestaurante(){
        this.producto =new ElementoPedido(this.cantidad,new Producto("Lasaña",this.valor)); 
        this.producto1 =new ElementoPedido(this.cantidad2, new Producto("Helado",this.valor2));
        let restaurante =this.restaurante
        let pedido =new Pedido(new Fecha(22,4,2020),new Tiempo(8,15,"pm"),new Cliente("Rodolfo Álvarado Gómes"),new Direccion("Boca de Apisa","#242","#242-B","Solidaridad","2345","Villa de Álvarez","Colima"),"312-343-3530");

        restaurante.registrarProducto(this.producto);
        restaurante.registrarProducto(this.producto1);
        pedido.agregarElemento(this.producto);
        pedido.agregarElemento(this.producto1);
        restaurante.registrarPedido(pedido);
        console.log("////////////////////Restaurante///////////////////////////////////") 
        restaurante.listarProductos();
        restaurante.listarPedidos();
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
app.probarRestaurante();