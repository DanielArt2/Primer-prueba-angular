//importar modulos del router de angular
import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar los componentes

import { zapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';



//crear un array de configuración de las rutas

const appRoutes:Routes = [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'zapatillas', component: zapatillasComponent},
    {path:'videojuegos', component: VideojuegoComponent},
    {path:'cursos', component: CursosComponent},
    {path:'cursos/:nombre/:followers', component: CursosComponent},
    {path:'externo', component: ExternoComponent},
    {path:'contacto', component: ContactoComponent},
    {path: '**', redirectTo: '/'}
]

//exportar el modulo del router

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
