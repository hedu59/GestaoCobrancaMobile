import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AcionamentoResumoModel } from '../../models/AcionamentoResumoModel';
import { Observable } from 'rxjs/Observable';
import { AcionamentoDetalheModel, DescicaoAcionamento } from '../../models/AcionamentoDetalheModel';

/*
  Generated class for the AcionamentoProvProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AcionamentoProvProvider {

  private readonly API = "http://192.168.2.2:1050/api/Acionamento/";
  private readonly API2 ="http://192.168.2.2:1050/api/Acionamento/detalhes/";

  constructor(public http: HttpClient) {
    console.log('Hello AcionamentoProvProvider Provider');
  }

    getAcionamentoResumo(id):Observable<AcionamentoResumoModel[]>{
    return this.http.get<AcionamentoResumoModel[]>(this.API+ id);
  }

    getAcionamentoResumoComData(id,dataIni,dataFim):Observable<AcionamentoResumoModel[]>{
    return this.http.get<AcionamentoResumoModel[]>(this.API+"resumo/"+ id + "?dataIni="+ dataIni +"&dataFim="+ dataFim);
  }

    getAcionamentoDetalhe(id, dataIni, dataFim):Observable<AcionamentoDetalheModel>{ //teste git
    return this.http.get<AcionamentoDetalheModel>(this.API2 + id + "?dataIni="+ dataIni +"&dataFim="+ dataFim);
  }
}
