import {HomeComponent} from "./components/home/home.component";
import {RouterModule, Routes} from "@angular/router";
import {ConvertirComponent} from "./components/convertir/convertir.component";
import {ResultadoConvertirComponent} from "./components/resultado-convertir/resultado-convertir.component";
import {FormConvertirComponent} from "./components/form-convertir/form-convertir.component";
import {ClienteComponent} from "./components/cliente/cliente.component";

const APP_ROUTES:Routes=[
  { path: 'home',component:HomeComponent},
  { path: 'convertir',component:ConvertirComponent},
  { path: 'form-convertir',component:FormConvertirComponent},
  { path: 'cliente',component:ClienteComponent},
  { path: '**',pathMatch:'full',redirectTo:'home'}
]

export const APP_ROUTING =RouterModule.forRoot(APP_ROUTES);
