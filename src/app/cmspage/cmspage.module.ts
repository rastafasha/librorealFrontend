import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';

import { CmspageRoutingModule } from './cmspage-routing.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PreiscripcionFormComponent } from './preiscripcion-form/preiscripcion-form.component';
import { ShipingFormComponent } from './shiping-form/shiping-form.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CmspageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule,
    AppRoutingModule,
  ],
  declarations: [
    ContactFormComponent,
    ShipingFormComponent,
    PreiscripcionFormComponent
  ],
  exports:[
    ContactFormComponent,
    ShipingFormComponent,
    PreiscripcionFormComponent

  ]
})
export class CmspageModule { }
