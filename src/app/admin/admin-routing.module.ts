import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FamiliaFormComponent } from './componentes/familia-form/familia-form.component';
import { NavComponent } from './componentes/nav/nav.component';


const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'crear',
        component: FamiliaFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
