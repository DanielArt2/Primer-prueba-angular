import { Component } from '@angular/core';
import {configuracion} from './models/configuracion';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'ProyectoEstudio';
  public descripcion: string;
  public fondo: string;
  public mostrar_videojuegos: boolean = true;
 

  constructor(){
    
    this.title = configuracion.titulo;
    this.descripcion = configuracion.descripcion;
    this.fondo = configuracion.fondo;

  }
  ocultarVideojuegos(value: any){
    this.mostrar_videojuegos = value;
  }

  
}
