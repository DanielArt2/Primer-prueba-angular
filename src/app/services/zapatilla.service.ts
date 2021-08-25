import { Injectable } from "@angular/core";
import { zapatilla } from "../models/zapatilla";


@Injectable()
export class zapatillaService{
    public zapatillas: Array<zapatilla>;
    constructor(){
        
        this.zapatillas = [
            new zapatilla('Reebook Classic','Reebook','blanco',80,true),
            new zapatilla('Nike mimimi','Nike','rojo',70,true),
            new zapatilla('Adidas kukui','Adidas','negro',120,false),
            new zapatilla('Nike ololo','Nike','azul',50,true)
            
        ]
    }

    getTexto(){
        return 'Hola Mundo desde un servicio';
    }

    getZapatillas(): Array<zapatilla>{
        return this.zapatillas;
    }
}