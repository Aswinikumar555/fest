import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MusicmastiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-musicmasti',
  templateUrl: 'musicmasti.html',
})
export class MusicmastiPage {
  musicmasti;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.musicmasti="Non-Technical";
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicmastiPage');
  }

}
