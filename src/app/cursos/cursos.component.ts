import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  public nombre: string;
  public followers: number;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {  
    this.nombre = "";
    this.followers = 0;
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params)=>{
      this.nombre = params.nombre;
      this.followers = +params.followers;
      //También vale de este modo
      //this.nombre = params['nombre'];
      console.log(this.nombre);
    });
  }

  redirigir(){
    this._router.navigate(['/zapatillas']);
  }

}
