import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamiliasService} from './services/familias/familias.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ] ,
  providers: [
    FamiliasService
  ]
})
export class CoreModule { }
