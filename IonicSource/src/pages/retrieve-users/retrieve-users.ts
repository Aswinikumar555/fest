import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegisteredUsersPage} from '../registered-users/registered-users';
/**
 * Generated class for the RetrieveUsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-retrieve-users',
  templateUrl: 'retrieve-users.html',
})
export class RetrieveUsersPage {
  eventname:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RetrieveUsersPage');
  }
  reg(){
    this.navCtrl.push(RegisteredUsersPage,{
      eventname:this.eventname
    });
  }
}
