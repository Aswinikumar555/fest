import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EcePage } from './ece';

@NgModule({
  declarations: [
    EcePage,
  ],
  imports: [
    IonicPageModule.forChild(EcePage),
  ],
})
export class EcePageModule {}
