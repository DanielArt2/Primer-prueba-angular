import { Component,OnInit,DoCheck,OnDestroy } from '@angular/core';

@Component({
    selector: 'videojuegos',
    templateUrl: './videojuego.component.html'
})


export class VideojuegoComponent implements OnInit,DoCheck,OnDestroy{
    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo = "Componente de Videojuegos";
        this.listado = "Listado de los juegos más populares";
        console.log("Se ha cargado la página videojuegos");
    }
    ngOnDestroy(){
        console.log("OnDestroy ejecutado");
    }

    ngDoCheck(){
        console.log("DoCheck ejecutado");
    }

    ngOnInit(){
        console.log("OnInit ejecutado");
    }

    cambiarTitulo(){
        this.titulo = "ardilla voladora";
    }
}