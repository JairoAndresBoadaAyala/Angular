import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamiliaComponent } from './componentes/familia/familia.componente';
import { FamiliasComponent } from './componentes/familias/familias.component';
import { FamiliasRoutingModule } from './familias-routing.module';
import { FamiliasDetalleComponent } from './componentes/familias-detalle/familias-detalle.component'
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
    declarations: [
        FamiliaComponent,
        FamiliasComponent,
        FamiliasDetalleComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FamiliasRoutingModule,
        MaterialModule
        ]
})
export class FamiliasModule {}
