import { Component,OnInit } from '@angular/core';
import {zapatilla} from '../models/zapatilla';
import { zapatillaService } from "../services/zapatilla.service";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [
        zapatillaService
    ]
})


export class zapatillasComponent implements OnInit{
    public titulo: String = "Componente de zapatillas";
    public zapatillas: Array<zapatilla>;
    public marcas: string[];
    public color : string;
    public mi_marca:string;

    constructor(
        private _zapatillaService: zapatillaService
    ){
        this.zapatillas = [];
        this.mi_marca = "a";
        this.color = "blue";
        this.marcas = new Array();
        
    }
    ngOnInit(){
        //console.log(this.zapatillas);
        this.zapatillas = this._zapatillaService.getZapatillas();
        //alert(this._zapatillaService.getTexto());
        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla,index) => {
            if(this.marcas.indexOf(zapatilla.marca) < 0){
                this.marcas.push(zapatilla.marca);
            }
        });
        //console.log(this.marcas);
      }
      getMarca(){
          alert(this.mi_marca);
      }

      addMarca(){
          this.marcas.push(this.mi_marca);
      }

      borrarMarca(index:any){
          //delete this.marcas[index];
          this.marcas.splice(index,1);
      }

      //onblur es cuando sales del input con el ratón,recuerda en el html poner (blur)="onBlur()"
      onBlur(){
          console.log(this.mi_marca);
      }
      //en html al poner (keyup.enter)="MostrarPalabra() al pulsar enter se ejecutará MostrarPlabra
      MostrarPalabra(){
          alert(this.mi_marca);
      }


}