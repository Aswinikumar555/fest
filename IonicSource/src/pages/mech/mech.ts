import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{EventdetailPage}from'../eventdetail/eventdetail';
/**
 * Generated class for the MechPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mech',
  templateUrl: 'mech.html',
})
export class MechPage {
  mech
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mech="Technical"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MechPage');
  }


  robotics(){
    this.navCtrl.push(EventdetailPage, {
          branchname: "MECH",
          eventname: "Robot Fight",
          imagepath: "assets/imgs/ROBOTICS.jpg"
      });     
  }

  ice(){
    this.navCtrl.push(EventdetailPage, {
          branchname: "MECH",
          eventname: "Internal Combustion Engine",
          imagepath: "assets/imgs/combustion engine.jpg"
      });     
  }
  quad(){
    this.navCtrl.push(EventdetailPage, {
          branchname: "MECH",
          eventname: "Quadcopter",
          imagepath: "assets/imgs/quadcopter.jpg"
      });     
  }
  tech(){
    this.navCtrl.push(EventdetailPage, {
          branchname: "MECH",
          eventname: "Technical Quiz",
          imagepath: "assets/imgs/technicalquiz.jpg"
      });     
  }

  vec(){
    this.navCtrl.push(EventdetailPage, {
          branchname: "MECH",
          eventname: "VECHICLE & OVERHAULING",
          imagepath: "assets/imgs/vehicle overhauling.jpg"
      });     
  }
  aut(){
    this.navCtrl.push(EventdetailPage, {
          branchname: "MECH",
          eventname: "AUTOMOBILE MECHANICS & IC ENGINE DESIGN",
          imagepath: "assets/imgs/automative electronics.jpg"
      });     
  }
}
