import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParqueaderoComponent } from './components/parqueadero/parqueadero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import {APP_ROUTING} from "./app.routes";
import { ConvertirComponent } from './components/convertir/convertir.component';
import { FormConvertirComponent } from './components/form-convertir/form-convertir.component';
import { ResultadoConvertirComponent } from './components/resultado-convertir/resultado-convertir.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    ParqueaderoComponent,
    NavbarComponent,
    HomeComponent,
    ConvertirComponent,
    FormConvertirComponent,
    ResultadoConvertirComponent,
    ClienteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
