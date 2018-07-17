import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { AlertController } from 'ionic-angular';
import { TechPage } from '../tech/tech';
import { NonTechnicalPage } from '../non-technical/non-technical';
import { MapPage } from '../map/map';
import { CulturalPage } from '../cultural/cultural';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {

  }
 
   ev(){
     this.navCtrl.setRoot(TechPage);
   }
   no(){
     this.navCtrl.setRoot(NonTechnicalPage);
   }
   map(){
     this.navCtrl.setRoot(MapPage);
   }
   cul(){
     this.navCtrl.setRoot(CulturalPage);
   }
}
