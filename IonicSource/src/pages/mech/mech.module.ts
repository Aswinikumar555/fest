import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MechPage } from './mech';

@NgModule({
  declarations: [
    MechPage,
  ],
  imports: [
    IonicPageModule.forChild(MechPage),
  ],
})
export class MechPageModule {}
