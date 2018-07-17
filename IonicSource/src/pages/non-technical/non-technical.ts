import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TreasurePage} from '../treasure/treasure';
import { SelfiehuntPage } from '../selfiehunt/selfiehunt';
import { MusicmastiPage } from '../musicmasti/musicmasti';
import { QuzPage } from '../quz/quz';

/**
 * Generated class for the NonTechnicalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-non-technical',
  templateUrl: 'non-technical.html',
})
export class NonTechnicalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NonTechnicalPage');
  }
  treasure()
  {
    this.navCtrl.push(TreasurePage);
  }
  selfie()
  {
    this.navCtrl.push(SelfiehuntPage);
  }
  musi()
  {
    this.navCtrl.push(MusicmastiPage);
  }
  quiz()
  {
    this.navCtrl.push(QuzPage);
  }
}
