import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{EventdetailPage}from'../eventdetail/eventdetail';
/**
 * Generated class for the ItPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-it',
  templateUrl: 'it.html',
})
export class ItPage {
  items
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items="Technical"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItPage');
  }
 
   Cyber () {
    this.navCtrl.push(EventdetailPage, {
          branchname: "IT",
          eventname: "Cyber Security",
          imagepath: "assets/imgs/cybersecurity.jpg"
      });     
  }
  Technical (){
    this.navCtrl.push(EventdetailPage, {
          branchname: "IT",
          eventname: " Technical Quiz",
          imagepath: "assets/imgs/technicalquiz.jpg"
      });     
  }
  hack (){
    this.navCtrl.push(EventdetailPage, {
          branchname: "IT",
          eventname: "Hackathon",
          imagepath: "assets/imgs/hacking.jpg"
      });     
  }
  detail (){
    this.navCtrl.push(EventdetailPage, {
          branchname: "IT",
          eventname: "Debugging",
          imagepath: "assets/imgs/debugging.jpg"
      });     
  }
  Ai(){
    this.navCtrl.push(EventdetailPage, {
          branchname: "IT",
          eventname: "Artificial Intelligence",
          imagepath: "assets/imgs/ai.jpg"
      });     
  }
  cloud (){
    this.navCtrl.push(EventdetailPage, {
          branchname: "IT",
          eventname: "Cloud Computing",
          imagepath: "assets/imgs/cloudcomputing.jpg"
      });     
  }

}
