import Direccion from "./direccion.js"
import Cliente from "./cliente.js"
import Tiempo from "./tiempo.js"

class Main{
    constructor(){
        
        this.direccion1=new Direccion("Bahía de Manzanillo","#234","#234-A","Solidaridad","29878","Villa de Álvarez","Villa de Álvarez")
        this.cliente1= new Cliente("Omar Pérez",this.direccion1,"312-109-1987")
        this.hora1= new Tiempo(3,40,"pm")
        
    }
    
    probarTiempo(){
    console.log("////////////////////Tiempo///////////////////////////////////")
    console.log(this.hora1.getFormato12())
    console.log(this.hora1.getFormato24())

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

}
let app=new Main();
app.probarCliente();
app.probarTiempo();
app.probarDireccion();