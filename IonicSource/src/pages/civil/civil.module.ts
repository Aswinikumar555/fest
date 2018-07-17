import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CivilPage } from './civil';

@NgModule({
  declarations: [
    CivilPage,
  ],
  imports: [
    IonicPageModule.forChild(CivilPage),
  ],
})
export class CivilPageModule {}
