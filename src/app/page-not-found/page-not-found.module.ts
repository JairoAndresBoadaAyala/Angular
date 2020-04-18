import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './componentes/page-not-found.component';
import { PageNotFoungRoutingModule } from './page-not-found-routing.module';

@NgModule({
    declarations: [
        PageNotFoundComponent
    ],
    imports: [
        CommonModule,
        PageNotFoungRoutingModule
    ]
})
export class PageNotFoundModule {}
