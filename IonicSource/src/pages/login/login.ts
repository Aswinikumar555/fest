import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { UserserviceProvider } from '../../providers/userservice/userservice';
import { HomePage } from '../home/home';
import { AdminHomePage } from '../admin-home/admin-home';
import {Http,Headers} from '@angular/http';
import { ToastController } from 'ionic-angular';
import { ForgotPage } from '../forgot/forgot';
import { SignupPage } from '../signup/signup';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email:String;
  password:String;
  data:any;
  constructor(public navCtrl: NavController,public men:MenuController, public navParams: NavParams,public service:UserserviceProvider,public http:Http,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    let userdata={
      email:this.email,
      password:this.password
    }
    let resp;

    this.service.loginUser(userdata).subscribe(res=>{
      this.data = res;
      let toast = this.toastCtrl.create({
        message: this.data,
        duration: 2000,
        position: 'top'
      });
  
      toast.present(toast);

      var usertext = "Login Successful...";
      var admintext = "admin loggedin";
      if(this.data === usertext){
        this.men.enable(true,"l");
        this.men.enable(false,"k");
        this.navCtrl.setRoot(HomePage);
      }
      else if(this.data === admintext){
        
        this.navCtrl.setRoot(AdminHomePage);
      }
    })
  }
  forgot(){
    this.navCtrl.push(ForgotPage);
  }
  signup(){
    this.navCtrl.push(SignupPage);
  }
}
