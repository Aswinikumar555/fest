import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RetrieveEventPage } from './retrieve-event';

@NgModule({
  declarations: [
    RetrieveEventPage,
  ],
  imports: [
    IonicPageModule.forChild(RetrieveEventPage),
  ],
})
export class RetrieveEventPageModule {}
