import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './crear/inicio/inicio.component';
import { CrearComponent } from './crear/crear/crear.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'crearTaxi', component: CrearComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
