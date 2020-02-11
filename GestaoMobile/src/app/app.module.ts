import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AcordoPage } from '../pages/acordo/acordo';
import { BoletoPage } from '../pages/boleto/boleto';
import { PagamentoPage } from '../pages/pagamento/pagamento';
import { AcionamentoPage } from '../pages/acionamento/acionamento';
import { DevedorPage } from '../pages/devedor/devedor';
import { FilaPage } from '../pages/fila/fila';
import { ContratanteProvProvider } from '../providers/contratante-prov/contratante-prov';
import { AcordoProvProvider } from '../providers/acordo-prov/acordo-prov';
import { HttpClientModule } from '@angular/common/http';
import { AcordoDetalhesPage } from '../pages/acordo-detalhes/acordo-detalhes';
import { AcionamentoProvProvider } from '../providers/acionamento-prov/acionamento-prov';
import { AcionamentoResumoPage } from '../pages/acionamento-resumo/acionamento-resumo';
import { AcionamentoDetalhesPage } from '../pages/acionamento-detalhes/acionamento-detalhes';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AcordoPage, AcordoDetalhesPage,
    BoletoPage,
    PagamentoPage,
    AcionamentoPage, AcionamentoResumoPage, AcionamentoDetalhesPage,
    DevedorPage,
    FilaPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AcordoPage, AcordoDetalhesPage,
    BoletoPage,
    PagamentoPage,
    AcionamentoPage, AcionamentoResumoPage, AcionamentoDetalhesPage,
    DevedorPage,
    FilaPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContratanteProvProvider,
    AcordoProvProvider,
    AcionamentoProvProvider
  ]
})
export class AppModule {}
