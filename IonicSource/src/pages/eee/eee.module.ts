import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EeePage } from './eee';

@NgModule({
  declarations: [
    EeePage,
  ],
  imports: [
    IonicPageModule.forChild(EeePage),
  ],
})
export class EeePageModule {}
