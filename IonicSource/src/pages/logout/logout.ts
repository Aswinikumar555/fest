import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserserviceProvider } from '../../providers/userservice/userservice';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams ,public men:MenuController,public service:UserserviceProvider,public toastCtrl: ToastController) {
    this.men.enable(false,"l");
    this.men.enable(true,"k")
    this.navCtrl.setRoot(HomePage)
    this.service.logoutUser().subscribe(res=>{
      let toast = this.toastCtrl.create({
        message: res,
        duration: 2000,
        position: 'top'
      });
  
      toast.present(toast);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
  }

}
