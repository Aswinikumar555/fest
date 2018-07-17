import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';
import { LoginPage } from '../login/login';
import { UserserviceProvider } from '../../providers/userservice/userservice';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  name:String;
  mobile:Number;
  email:String;
  college:String;
  password:String;
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public viewCtrl:ViewController,public service:UserserviceProvider,public toastCtrl: ToastController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  signUp(){
    let user={
      name:this.name,
      mobile:this.mobile,
      email:this.email,
      college:this.college,
      password:this.password
    }
    let resp;

    this.service.addUser(user).subscribe(res=>{
      this.data = res;
      let toast = this.toastCtrl.create({
        message: this.data,
        duration: 2000,
        position: 'middle'
      });
      toast.present(toast);
      var text = "User Registration successfull";
      if(this.data === text){
        this.navCtrl.setRoot(LoginPage);
      }
    })
  }

}
