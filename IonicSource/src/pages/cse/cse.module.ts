import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CsePage } from './cse';

@NgModule({
  declarations: [
    CsePage,
  ],
  imports: [
    IonicPageModule.forChild(CsePage),
  ],
})
export class CsePageModule {}
