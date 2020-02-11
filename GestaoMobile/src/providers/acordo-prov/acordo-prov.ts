import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { acordoModel } from '../../models/AcordoModel';

/*
  Generated class for the AcordoProvProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AcordoProvProvider {

  private readonly API = "http://192.168.2.2:1050/api/Acordo/";

  constructor(public http: HttpClient) {
  console.log('Hello AcordoproviderProvider Provider');
}

  getAcordoSintetico(id):Observable<acordoModel>{
  return this.http.get<acordoModel>(this.API + id);
}

}
