import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighligthDirective } from './directives/highligth/highligth.directive';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FamiliaComponent } from '../familias/componentes/familia/familia.componente';
import { FamiliasModule } from '../familias/familias.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ExponentialPipe,
    HighligthDirective,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    ExponentialPipe,
    HighligthDirective,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class SharedModule { }
