import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevedorPage } from './devedor';

@NgModule({
  declarations: [
    DevedorPage,
  ],
  imports: [
    IonicPageModule.forChild(DevedorPage),
  ],
})
export class DevedorPageModule {}
