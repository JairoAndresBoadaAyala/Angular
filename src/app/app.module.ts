import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamiliaComponent } from './familia/familia.componente';
import { CartComponent } from './cart/cart.component';
import { FamiliasComponent } from './familias/familias.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FamiliasDetalleComponent } from './familias-detalle/familias-detalle.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule} from './shared/shared.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    FamiliaComponent,
    CartComponent,
    FamiliasComponent,
    ContactoComponent,
    DemoComponent,
    PageNotFoundComponent,
    FamiliasDetalleComponent,
    LayoutComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
