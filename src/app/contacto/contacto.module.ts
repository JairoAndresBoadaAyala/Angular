import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './componentes/contacto.component';
import { SharedModule } from '../shared/shared.module';
import { ContactoRoutingModule } from './contacto-routing.module';

@NgModule({
    declarations: [
        ContactoComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ContactoRoutingModule
        ]
})
export class ContactoModule {}
