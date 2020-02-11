import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContratanteProvProvider } from '../../providers/contratante-prov/contratante-prov';
import { ContratanteModel } from '../../models/ContratanteModel';
import { AcordoDetalhesPage } from '../acordo-detalhes/acordo-detalhes';
import _ from 'lodash';


@IonicPage()
@Component({
  selector: 'page-acordo',
  templateUrl: 'acordo.html',
  providers:[
    ContratanteProvProvider
  ]
})
export class AcordoPage {

  searchQuery: string = '';
  contratantes: ContratanteModel[];
  todosCont: any;
  queryText: string;
  cont: Array<ContratanteModel>;

  contratante: ContratanteModel;
  public contModel: ContratanteModel[];

  constructor(

    public navCtrl: NavController,
    public navParams: NavParams,
    public contratanteProvider: ContratanteProvProvider) {

      this.queryText = '';
      this.cont = this.contModel;
      this.obterdados();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcordoPage');
  }

  obterdados() {
        this.contratanteProvider.getListaContratante().subscribe((valor: ContratanteModel[]) => {
        console.log("request");
        console.log(valor);
        this.contModel = valor;

      }, () => {
        console.log("Erro");
      }
    );
  }

  filterContratante(co: any){
    let val = co.target.value;

    if(val && val.trim() !=''){

      this.cont = _.values(this.todosCont);
      this.cont = this.cont.filter((fant)=>{
        return (fant.Fantasia.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else{
      this.cont = this.todosCont;
    }

  }


  selecionado(valor: ContratanteModel) {
    console.log(valor);
    this.navCtrl.push(AcordoDetalhesPage, {id: valor})
    console.log();
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.contModel;

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.contModel = this.contModel.filter((item) => {

        return (item.Fantasia.toLowerCase().includes(val.toLowerCase()));
      })
    }
  }


}
