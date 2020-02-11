import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { ContratanteProvProvider } from '../../providers/contratante-prov/contratante-prov';
import { ContratanteModel } from '../../models/ContratanteModel';
import { AcionamentoResumoPage } from '../acionamento-resumo/acionamento-resumo';

/**
 * Generated class for the AcionamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acionamento',
  templateUrl: 'acionamento.html',
  providers:[
    ContratanteProvProvider
  ]
})
export class AcionamentoPage {

  searchQuery: string = '';
  contratantes: ContratanteModel[];
  cont: Array<ContratanteModel>;
  contratante: ContratanteModel;

  public contModel: ContratanteModel[];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public contratanteProvider: ContratanteProvProvider,
    public alertCtrl: AlertController) {
      
      this.cont = this.contModel;
      this.obterdados();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcionamentoPage');
  }


  obterdados() {
    this.contratanteProvider.getBoleto(); 
  }

  selecionado(valor: ContratanteModel) {

    let data = new Date();
    console.log(valor);
    this.navCtrl.push(AcionamentoResumoPage, {id: valor, datIni:data.toLocaleDateString, dataFim:data.toLocaleDateString})
    console.log();
  }

  presentAlert() {
    let alert = this.alertCtrl.create({

      title: 'Não encontrado!',
      subTitle: 'Sem registro nos ultimos 10 dias.',
      buttons: ['Fechar']
    });
    alert.present();
  }

}
