import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.component.html',
  styleUrls: ['./parqueadero.component.css']
})
export class ParqueaderoComponent  {

  @Input() cargo:number=0;
  @Input() nombres:string="";
  @Input() apellidos:string="";
  @Input() tipoAutomovil:string="";
  @Input() cedula:string="";
  @Input() placa:string="";




}
