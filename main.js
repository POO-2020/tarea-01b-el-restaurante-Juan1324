import Direccion from "./direccion.js"
import Cliente from "./cliente.js"

class Main{
    constructor(){
        
        this.direccion1=new Direccion("Bahía de Manzanillo","#234","#234-A","Solidaridad","29878","Villa de Álvarez","Villa de Álvarez")
        this.cliente1= new Cliente("Omar Pérez",this.direccion1,"312-109-1987")
        

    }
    probarCliente(){
        console.log(`${this.cliente1.getPerfil()}`);

    }
}
let app=new Main();
app.probarCliente();