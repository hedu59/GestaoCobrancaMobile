import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcionamentoDetalhesPage } from './acionamento-detalhes';

@NgModule({
  declarations: [
    AcionamentoDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(AcionamentoDetalhesPage),
  ],
})
export class AcionamentoDetalhesPageModule {}
