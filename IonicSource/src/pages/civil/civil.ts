import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{EventdetailPage}from'../eventdetail/eventdetail';
/**
 * Generated class for the CivilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-civil',
  templateUrl: 'civil.html',
})
export class CivilPage {
  item
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item="Technical"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CivilPage');
  }
  bridge(){
    this.navCtrl.push(EventdetailPage, {
      branchname: "CIVIL",
      eventname: "Bridge design",
      imagepath: "../../assets/imgs/bridgedesign1.jpg"
  }); 
  }

  town(){
    this.navCtrl.push(EventdetailPage, {
      branchname: "CIVIL",
      eventname: "Town plan",
      imagepath: "../../assets/imgs/townplanning.jpg"
  }); 
  }
  truss(){
    this.navCtrl.push(EventdetailPage, {
      branchname: "CIVIL",
      eventname: "Truss",
      imagepath: "../../assets/imgs/truss.jpg"
  }); 
  }
  tech(){
    this.navCtrl.push(EventdetailPage, {
      branchname: "CIVIL",
      eventname: "Technical Quiz",
      imagepath: "../../assets/imgs/technicalquiz.jpg"
  }); 
  }
  staad(){
    this.navCtrl.push(EventdetailPage, {
      branchname: "CIVIL",
      eventname: "STADD Pro",
      imagepath: "../../assets/imgs/staadpro.jpg"
  }); 
  }
  found(){
    this.navCtrl.push(EventdetailPage, {
      branchname: "CIVIL",
      eventname: "Foundation Analysis",
      imagepath: "../../assets/imgs/foundationanalysis.jpg"
  }); 
  }
}
