import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoletoPage } from './boleto';

@NgModule({
  declarations: [
    BoletoPage,
  ],
  imports: [
    IonicPageModule.forChild(BoletoPage),
  ],
})
export class BoletoPageModule {}
