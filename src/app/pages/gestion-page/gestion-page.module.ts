import { GestionPageComponent } from './gestion-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionPageRoutingModule } from './gestion-page-routing.module';


@NgModule({
  declarations: [GestionPageComponent],
  imports: [
    CommonModule,
    GestionPageRoutingModule
  ]
})
export class GestionPageModule { }
