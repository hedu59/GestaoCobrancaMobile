import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContratanteModel } from '../../models/ContratanteModel';
import { Observable } from 'rxjs/Observable';
import { Base64 } from '@ionic-native/base64/ngx';

/*
  Generated class for the ContratanteProvProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContratanteProvProvider {

  private readonly API = "http://192.168.2.2:1050/api/Contratante";
  private readonly API2 = "http://localhost:50654/api/Boleto/BytesBoleto/?devedorId=280866&contId=27&titulos=1742967";
  base64: Base64;
  constructor(public http: HttpClient) {
    console.log('Hello ContratanteProvProvider Provider');
  }

  getListaContratante():Observable<ContratanteModel[]>{
    return this.http.get<ContratanteModel[]>(this.API);
  }

  getBoleto(){
    var a = this.http.get(this.API2).subscribe(v => {
     // this.base64 = v
     // window.open(this.base64.toString(), "_blank", "location=no,enableviewportscale=yes");


     

     // window.open("", "_blank", "location=no,enableviewportscale=yes");

     
      
    
      this.base64
      console.log(v);
  
    })
   
    }    

}


