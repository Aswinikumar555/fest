import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventdetailPage } from './eventdetail';
import { Http,HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    EventdetailPage
  ],
  imports: [
    IonicPageModule.forChild(EventdetailPage),
  ],
})
export class EventdetailPageModule{
}
