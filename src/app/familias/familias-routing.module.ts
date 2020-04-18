import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FamiliasComponent } from './componentes/familias/familias.component';
import { FamiliasDetalleComponent } from './componentes/familias-detalle/familias-detalle.component';


const routes: Routes = [
    {
        path: '',
        component: FamiliasComponent
    },
    {
        path: ':id',
        component : FamiliasDetalleComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class FamiliasRoutingModule { }
