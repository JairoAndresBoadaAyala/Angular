import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { LayoutComponent } from './layout/layout.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(r => r.HomeModule)
      },
      {
        path: 'familias',
        loadChildren: () => import('./familias/familias.module').then(m => m.FamiliasModule)
      },
      {
        path: 'familias/:id',
        loadChildren: () => import('./familias/familias.module').then(m => m.FamiliasModule)
      },
      {
        path: 'contacto',
        loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoModule)

      }
    ]
  },
    {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)

  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
