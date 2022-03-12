import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-resultado-convertir',
  templateUrl: './resultado-convertir.component.html',
  styleUrls: ['./resultado-convertir.component.css']
})
export class ResultadoConvertirComponent  {

  @Input() conversion1:number=0;
  @Input() conversion2:number=0;
}
