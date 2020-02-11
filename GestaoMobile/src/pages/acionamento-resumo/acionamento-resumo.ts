import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AcionamentoResumoModel } from '../../models/AcionamentoResumoModel';
import { AcionamentoProvProvider } from '../../providers/acionamento-prov/acionamento-prov';
import _ from 'lodash';
import { AcionamentoDetalhesPage } from '../acionamento-detalhes/acionamento-detalhes';
import { DataModel } from '../../models/DatasModel';
import { ThrowStmt } from '@angular/compiler';


@IonicPage()
@Component({
  selector: 'page-acionamento-resumo',
  templateUrl: 'acionamento-resumo.html',
  providers:[
    AcionamentoProvProvider
  ]
})
export class AcionamentoResumoPage {
  cont: Array<AcionamentoResumoModel>;
  now = new Date();
  public dat:DataModel;
  public objAcionamento: AcionamentoResumoModel[];
  loader: any = this.loadingCtrl.create();


  constructor(

    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public acionamentoProvider: AcionamentoProvProvider,
    public alertCtrl:AlertController) {

      this.cont = this.objAcionamento;
      this.obterdados();
  }

  selecionado(valor: AcionamentoDetalhesPage) {

    var data = new Date();

    if(this.dat == null || this.dat == undefined)
    {
      let da = new DataModel;
      da.dataIni = data;
      da.dataFim = data;
      this.navCtrl.push(AcionamentoDetalhesPage, {id: valor, dataIni: data.toLocaleDateString(),  dataFim: data.toLocaleDateString()})
    }
    else
    {
      this.navCtrl.push(AcionamentoDetalhesPage, {id: valor, dataIni: this.dat.dataIni,  dataFim: this.dat.dataFim})
    }

    console.log(this.dat);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcionamentoResumoPage');
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      content:
              `<div class="custom-spinner-container style:text-align:center">
                <div class="custom-spinner-box"> Aguarde...</div>
              </div>`,

    });
    this.loader.present();
  }

  obterdados() {

    this.presentLoading();
    let contId =this.navParams.get('id');
    this.acionamentoProvider.getAcionamentoResumo(contId).subscribe(
    (valor: AcionamentoResumoModel[]) =>
        {this.objAcionamento = valor;

          if(valor == null)
            {
              this.loader.dismiss();
              this.presentAlert();
            }

          console.log(this.objAcionamento);
          this.loader.dismiss();
        },
    ()=> {this.presentAlert()}
   );
  }

  obterdadosComData(dataIni:Date, dataFim: Date){

    this.presentLoading();
    let contId =this.navParams.get('id');
    this.acionamentoProvider.getAcionamentoResumoComData(contId, dataIni, dataFim).subscribe((valor: AcionamentoResumoModel[]) =>{
    this.objAcionamento = valor;

    if(valor == null )
    {
      this.presentAlert();
    }},()=> { console.log("Erro");}
   );

  }

  getColor(QuantidadeTotal) {
    if(QuantidadeTotal >=500){
      return 'green';
    }
    else if(QuantidadeTotal <=499 && QuantidadeTotal >=100){
      return 'orange  ';
    }
    if (QuantidadeTotal<99){
      return 'Red';
    }
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Período',
      inputs: [
        {
          name: 'dataIni',
          type: "date",
         // handler: data =>{ criar função informando que data nao pode ser superior a 7 dias.}
        },
        {
          name: 'dataFim',
          type: 'date'

        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');

          }
        },
        {
          text: 'Buscar',
          handler: data => {
            if (1===1) {

              this.dat=data;
              this.obterdadosComData(this.dat.dataIni,this.dat.dataFim);
              this.loader.dismiss();
            } else {
              return false;
            }
          }
        }
      ]
    });
    alert.present();
  }

  presentAlert() {
    let alert = this.alertCtrl.create({

      title: 'Não encontrado!',
      subTitle: 'O período selecionado não possui registros.',
      buttons: ['Fechar'],

    });
    this.loader.dismiss();
    alert.present();
  }

}
