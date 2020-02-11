import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AcionamentoResumoModel } from '../../models/AcionamentoResumoModel';
import { AcionamentoProvProvider } from '../../providers/acionamento-prov/acionamento-prov';
import { AcionamentoDetalheModel, DescicaoAcionamento } from '../../models/AcionamentoDetalheModel';

/**
 * Generated class for the AcionamentoDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acionamento-detalhes',
  templateUrl: 'acionamento-detalhes.html',
})

export class AcionamentoDetalhesPage {
  cont: AcionamentoDetalheModel;
  desc: DescicaoAcionamento;

  public objAcionamento: AcionamentoDetalheModel;
  public objDescricao: DescicaoAcionamento;
  loader: any = this.loadingCtrl.create();

  constructor(

    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public acionamentoProvider: AcionamentoProvProvider) {

      this.cont = this.objAcionamento;
      this.desc = this.objDescricao;
      this.obterdados();
  }

  selecionado(valor: AcionamentoResumoModel) {
    console.log(valor);
    this.navCtrl.push(AcionamentoDetalhesPage, {id: valor})
    console.log();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcionamentoDetalhePage');

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
    let dataIni = this.navParams.get('dataIni');
    let dataFim = this.navParams.get('dataFim');
    var data = new Date().toLocaleDateString();

    if((dataIni  == undefined || dataFim  == undefined))
    {
      dataIni = data;
      dataFim = data;
    }

    this.acionamentoProvider.getAcionamentoDetalhe(contId,dataIni,dataFim).subscribe((valor: AcionamentoDetalheModel) =>{
    this.objAcionamento = valor;
    this.loader.dismiss();
    this.objDescricao = this.objAcionamento.DescricaoGeral;

      console.log(this.objAcionamento);
    },()=> { console.log("Erro");}
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
}
