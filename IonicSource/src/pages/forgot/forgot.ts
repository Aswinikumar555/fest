import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UserserviceProvider } from '../../providers/userservice/userservice';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {
  data:any;
  email:any;
  password:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public service:UserserviceProvider,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPage');
  }
  reset(){
    let resetdata = {
      email:this.email,
      password:this.password
    }
    this.service.resetPassword(resetdata).subscribe(res => {
      this.data = res;
      let toast = this.toastCtrl.create({
        message: this.data,
        duration: 2000,
        position: 'middle'
      });
      toast.present(toast);
      var updated = "Password updated";
      if(this.data === updated){
      this.navCtrl.push(LoginPage);
      }
    })
  }

}
