import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PreiscripcionFormComponent } from './preiscripcion-form/preiscripcion-form.component';
import { ShipingFormComponent } from './shiping-form/shiping-form.component';

const routes: Routes = [
  {path: 'contacto', component: ContactFormComponent},
  {path: 'pre-inscripcion', component: PreiscripcionFormComponent},
  {path: 'comprar-libros-en-linea', component: ShipingFormComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmspageRoutingModule { }
