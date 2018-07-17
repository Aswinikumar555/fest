import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CsePage } from '../cse/cse';
import { CivilPage } from '../civil/civil';
import { EeePage } from '../eee/eee';
import { EcePage } from '../ece/ece';
import { ItPage } from '../it/it';
import { MechPage } from '../mech/mech';


/**
 * Generated class for the TechPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tech',
  templateUrl: 'tech.html',
})
export class TechPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TechPage');
  }
  cse(){
    this.navCtrl.push(CsePage);
  }
  civil(){
    this.navCtrl.push(CivilPage);
  }
  eee(){
    this.navCtrl.push(EeePage);
  }
  ece(){
    this.navCtrl.push(EcePage);
  }
  it(){
    this.navCtrl.push(ItPage);
  }
  mech(){
    this.navCtrl.push(MechPage);
  }
}
