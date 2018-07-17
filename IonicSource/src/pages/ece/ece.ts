import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{EventdetailPage}from'../eventdetail/eventdetail';

/**
 * Generated class for the EcePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ece',
  templateUrl: 'ece.html',
})
export class EcePage {
  ece;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ece="Technical"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EcePage');
  }
  arduino() {
    this.navCtrl.push(EventdetailPage, {
          branchname: "ECE",
          eventname: "Arduino",
          imagepath: "assets/imgs/ardino.jpg"
      });     
  }
  circuitrix() {
    this.navCtrl.push(EventdetailPage, {
      branchname: "ECE",
      eventname: "Circuitrix",
      imagepath: "assets/imgs/circiut.jpg"
    });     
  }

  tech() {
    this.navCtrl.push(EventdetailPage, {
      branchname: "ECE",
      eventname: "Technical Quiz",
      imagepath: "assets/imgs/technicalquiz.jpg"
    });     
  }
  hack() {
    this.navCtrl.push(EventdetailPage, {
      branchname: "ECE",
      eventname: "Hack",
      imagepath: "assets/imgs/hacking.jpg"
    });     
  }
  PCB () {
    this.navCtrl.push(EventdetailPage, {
      branchname: "ECE",
      eventname: "PCB Designing",
      imagepath: "assets/imgs/pcb design.png"
    });     
  }
  NEURAL () {
    this.navCtrl.push(EventdetailPage, {
      branchname: "ECE",
      eventname: "Neural Network",
      imagepath: "assets/imgs/neural network.jpg"
    });     
  }




  
  
}
