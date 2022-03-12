
export class ClientesService {


  calcularFechas(fechaInicial:Date,fechaFinal:Date):number{
    let diferencia= fechaFinal.getHours()-fechaInicial.getHours();
    return diferencia;
  }

}
