import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AcordoProvProvider } from '../../providers/acordo-prov/acordo-prov';
import { acordoModel } from '../../models/AcordoModel';

/**
 * Generated class for the AcordoDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acordo-detalhes',
  templateUrl: 'acordo-detalhes.html',
  providers:[
    AcordoProvProvider
  ]
})
export class AcordoDetalhesPage {

  public objAcordo: acordoModel;
  loader = this.loadingCtrl.create();

  constructor(

    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public acordoProvider: AcordoProvProvider)
    {
      this.obterdados();

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcordoDetalhesPage');
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

    this.acordoProvider.getAcordoSintetico(contId).subscribe(
    (valor: acordoModel) => {this.objAcordo = valor; this.loader.dismiss()},
    ()=> { console.log("Erro");}
   );
  }

}
