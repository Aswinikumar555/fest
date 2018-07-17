import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SelfiehuntPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selfiehunt',
  templateUrl: 'selfiehunt.html',
})
export class SelfiehuntPage {
  selfiehunt;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selfiehunt="Non-Technical";
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SelfiehuntPage');
  }

}
