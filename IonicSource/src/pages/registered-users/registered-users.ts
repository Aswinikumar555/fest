import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RetrieveUsersPage } from "../retrieve-users/retrieve-users";
import { AdminserviceProvider } from '../../providers/adminservice/adminservice';
/**
 * Generated class for the RegisteredUsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registered-users',
  templateUrl: 'registered-users.html',
})
export class RegisteredUsersPage {
  eventname:any;
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public service:AdminserviceProvider) {
    this.eventname = navParams.get('eventname');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisteredUsersPage');
    let event = {
      eventname:this.eventname
    }
    this.service.retrieveUsers(event).subscribe(res =>{
      this.data = res;
      console.log(res);
    })
  }

}
