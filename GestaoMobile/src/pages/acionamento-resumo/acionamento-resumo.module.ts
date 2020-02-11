import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcionamentoResumoPage } from './acionamento-resumo';

@NgModule({
  declarations: [
    AcionamentoResumoPage,
  ],
  imports: [
    IonicPageModule.forChild(AcionamentoResumoPage),
  ],
})
export class AcionamentoResumoPageModule {}
