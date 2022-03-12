import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertir',
  templateUrl: './convertir.component.html',
  styleUrls: ['./convertir.component.css']
})
export class ConvertirComponent {

  conversion1:number=0;
  conversion2:number=0;

  getConversionFarenheitCentigrados(valorFarenheit:number){
    this.conversion1=5.0/9.0*(valorFarenheit-32);
  }
  getConversionCentigradosFarenheit(valorCentigrados:number){
    this.conversion2=9.0/5.0*valorCentigrados+32;
  }

}
