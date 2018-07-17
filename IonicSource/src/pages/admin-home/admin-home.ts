import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RetrieveEventPage } from '../retrieve-event/retrieve-event'
import { RetrieveUsersPage } from '../retrieve-users/retrieve-users'
import { HomePage } from '../home/home';
/**
 * Generated class for the AdminHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-home',
  templateUrl: 'admin-home.html',
})
export class AdminHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminHomePage');
  }
  upd(){
    this.navCtrl.push(RetrieveEventPage);
  }
  che(){
    this.navCtrl.push(RetrieveUsersPage);
  }
 log(){
   this.navCtrl.setRoot(HomePage);
 }
}
