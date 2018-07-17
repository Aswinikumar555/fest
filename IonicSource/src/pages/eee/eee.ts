import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{EventdetailPage}from'../eventdetail/eventdetail';
/**
 * Generated class for the EeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eee',
  templateUrl: 'eee.html',
})
export class EeePage {
  eee;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.eee="Technical"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EeePage');
  }
  crossword() {
    this.navCtrl.push(EventdetailPage, {
          branchname: "EEE",
          eventname: "Crossword",
          imagepath: "assets/imgs/crossword.jpg"
      });     
  }
  password() {
    this.navCtrl.push(EventdetailPage, {
      branchname: "EEE",
      eventname: "Password Cracking",
      imagepath: "assets/imgs/passwordcrcking.jpg"
    });     
  }
robotics(){
    this.navCtrl.push(EventdetailPage, {
      branchname: "EEE",
      eventname: "Robotics",
      imagepath: "assets/imgs/ROBOTICS.jpg"
    });     
  }
  tech() {
    this.navCtrl.push(EventdetailPage, {
      branchname: "EEE",
      eventname: "Technical Quiz",
      imagepath: "assets/imgs/technicalquiz.jpg"
    });     
  }
  iot() {
    this.navCtrl.push(EventdetailPage, {
      branchname: "EEE",
      eventname: "IOT(Internet of Things)",
      imagepath: "assets/imgs/IOT1.jpg"
    });     
  }
  auto(){
    this.navCtrl.push(EventdetailPage, {
      branchname: "EEE",
      eventname: "Automation",
      imagepath: "assets/imgs/automation.jpg"
    });     
  }
}
