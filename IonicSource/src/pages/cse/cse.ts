import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventdetailPage} from '../eventdetail/eventdetail';
/**
 * Generated class for the CsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cse',
  templateUrl: 'cse.html',
})
export class CsePage {
  items;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items="Technical";
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CsePage');
  }
  callHackathon() {
    this.navCtrl.push(EventdetailPage, {
          branchname: "CSE",
          eventname: "Hackathon",
          imagepath: "assets/imgs/hackton1.jpg"
      });     
  }
  callDebugging() {
    this.navCtrl.push(EventdetailPage, {
      branchname: "CSE",
      eventname: "Debugging",
      imagepath: "assets/imgs/debugging.jpg"
    });     
  }
  callBlindCoding() {
    this.navCtrl.push(EventdetailPage, {
      branchname: "CSE",
      eventname: "Blind Coding",
      imagepath: "assets/imgs/Blind.jpg"
    });     
  }
  callTopcoder() {
    this.navCtrl.push(EventdetailPage, {
      branchname: "CSE",
      eventname: "Topcoder",
      imagepath: "assets/imgs/topcoder1.jpg"
    });     
  }
  MACHINE(){
    this.navCtrl.push(EventdetailPage, {
      branchname: "CSE",
      eventname: "Machine Learning",
      imagepath: "assets/imgs/machine learning.jpg"
    });     
  }
  BLOCKCHAIN () {
    this.navCtrl.push(EventdetailPage, {
      branchname: "CSE",
      eventname: "Block Chain",
      imagepath: "assets/imgs/blockchain3.jpg"
    });     
  }
}
