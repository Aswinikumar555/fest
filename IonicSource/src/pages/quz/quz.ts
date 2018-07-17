import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuzPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quz',
  templateUrl: 'quz.html',
})
export class QuzPage {
  quiz;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.quiz="Non-Techncal";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuzPage');
  }

}
