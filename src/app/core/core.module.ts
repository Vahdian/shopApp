import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [MenuComponent, FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MenuComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
