import {Component, Input, OnInit} from '@angular/core';
import {ClientesService} from "../../services/clientes.service";



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {

  fechaSistema= Date.now();
  fechasActual= new Date(this.fechaSistema);
  diferencia:number=0;
  cargo:number=2000;
  nombres:string="";
  apellidos:string="";
  tipoAutomovil:string="";
  cedula:string="";
  placa:string="";


  calcularFechasFinal(fechaInicio:string,fechaTermino:string){
    let fechaInicio1= new Date(fechaInicio);
    let fechaTermino1= new Date(fechaTermino);
    if(fechaInicio1<this.fechasActual || fechaTermino1<this.fechasActual){
      alert("Las fechas no pueden ser menores a la fecha actual")
      this.cargo=0;
    }
    else{
      this.diferencia=this.calcularFechas(fechaInicio1,fechaTermino1);
      this.calcularCargos(this.diferencia);
    }


  }
  calcularFechas(fechaInicial:Date,fechaFinal:Date):number{
    let diferencia= ((fechaFinal.getTime()-fechaInicial.getTime())/1000)/3600;
    let diferencia2=Math.abs(Math.round(diferencia));
    return diferencia2;
  }

  calcularCargos(diferencia:number):number{
    this.cargo=2000;
    if(diferencia<=3){
       return this.cargo;
    }
    else if(diferencia<24){
      this.cargo+=(diferencia-3)*500;
      return this.cargo;
    }
    else{
      this.cargo=10000;
      return this.cargo

    }

  }



 }
