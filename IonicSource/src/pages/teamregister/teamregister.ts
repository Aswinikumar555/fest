import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserserviceProvider } from '../../providers/userservice/userservice';
import { ToastController } from 'ionic-angular';
import { TechPage } from '../tech/tech';
/**
 * Generated class for the TeamregisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teamregister',
  templateUrl: 'teamregister.html',
})
export class TeamregisterPage {
  teamevent:any;
  teameventbranch:any;
  teamname:any;
  teammember1name:any;
  teammember1email:any;
  teammember1mobile:any;
  teammember1college:any;
  teammember2name:any;
  teammember2email:any;
  teammember2mobile:any;
  teammember2college:any;
  teammember3name:any;
  teammember3email:any;
  teammember3mobile:any;
  teammember3college:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:UserserviceProvider,public toastCtrl: ToastController) {
    this.teamevent = navParams.get('eventname');
    this.teameventbranch = navParams.get('branchname');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamregisterPage');
  }

  teamReg(){
    let team = {
      "teamname":this.teamname,
    "teamevent":this.teamevent,
    "teameventbranch":this.teameventbranch,
    "teammember1name":this.teammember1name,
    "teammember1email":this.teammember1email,
    "teammember1mobile":this.teammember1mobile,
    "teammember1college":this.teammember1college,
    "teammember2name":this.teammember2name,
    "teammember2email":this.teammember2email,
    "teammember2mobile":this.teammember2mobile,
    "teammember2college":this.teammember2college,
    "teammember3name":this.teammember3name,
    "teammember3email":this.teammember3email,
    "teammember3mobile":this.teammember3mobile,
    "teammember3college":this.teammember3college
    }
    this.service.addTeam(team).subscribe(res => {
      console.log(res);
      let toast = this.toastCtrl.create({
        message: res,
        duration: 2000,
        position: 'middle'
      });
  
      toast.present(toast);
    })
    this.navCtrl.setRoot(TechPage);
  }
}
