import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioRegistroComponent } from './usuario/usuario-registro/usuario-registro.component';
import { UsuarioLoginComponent } from './usuario/usuario-login/usuario-login.component';
import { ArticuloCatalogoComponent } from './articulo/articulo-catalogo/articulo-catalogo.component';
import { ArticuloInfoComponent } from './articulo/articulo-info/articulo-info.component';
import { CarritoModalComponent } from './carritos/carrito-modal/carrito-modal.component';
import { OrdenesListaComponent } from './ordenes/ordenes-lista/ordenes-lista.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
