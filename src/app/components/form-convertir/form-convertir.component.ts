import {Component, OnInit, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-form-convertir',
  templateUrl: './form-convertir.component.html',
  styleUrls: ['./form-convertir.component.css']
})
export class FormConvertirComponent  {

  @Output() valorCentigrados=new EventEmitter<number>();
  @Output() valorFarenheit=new EventEmitter<number>();
  conversion1:number= 0;
  conversion2:number= 0;

  getConversionFarenheitCentigrados(){
    this.valorFarenheit.emit(this.conversion1);
  }
  getConversionCentigradosFarenheit(){
    this.valorCentigrados.emit(this.conversion2);
  }




}
