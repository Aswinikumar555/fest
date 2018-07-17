import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NonTechnicalPage } from './non-technical';

@NgModule({
  declarations: [
    NonTechnicalPage,
  ],
  imports: [
    IonicPageModule.forChild(NonTechnicalPage),
  ],
})
export class NonTechnicalPageModule {}
