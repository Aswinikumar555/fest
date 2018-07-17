import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuzPage } from './quz';

@NgModule({
  declarations: [
    QuzPage,
  ],
  imports: [
    IonicPageModule.forChild(QuzPage),
  ],
})
export class QuzPageModule {}
