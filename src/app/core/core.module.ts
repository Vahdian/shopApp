import { MenuComponent } from './components/menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule
  ],
  exports:[
    MenuComponent
  ]
})
export class CoreModule { }
