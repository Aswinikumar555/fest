import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UpdateEventPage} from '../update-event/update-event';
/**
 * Generated class for the RetrieveEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-retrieve-event',
  templateUrl: 'retrieve-event.html',
})
export class RetrieveEventPage {
  branchname:String;
  eventname:String;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RetrieveEventPage');
  }
  // getEvents(branch){
  //   console.log(branch)
  //   if(branch === 1){
  //     console.log("1");
  //   }
  //   else{
  //     console.log("2");
  //   }
  // }
  sub(){
  this.navCtrl.push(UpdateEventPage,{
    branchname:this.branchname,
    eventname:this.eventname
  });
  }

}
