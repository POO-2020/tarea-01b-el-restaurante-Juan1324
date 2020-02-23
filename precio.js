export default class Precio{
    constructor(valor){
        this.valor = valor;
    }

    getPrecio(){
        return "$" + new Intl.NumberFormat("es-MX").format(this.valor); 
    }
}