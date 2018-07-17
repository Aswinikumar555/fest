import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserserviceProvider } from '../../providers/userservice/userservice';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the UserprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userprofile',
  templateUrl: 'userprofile.html',
})
export class UserprofilePage {
  name:any;
  email:any;
  mobile:any;
  college:any;
  events:any;
  teamevents:any;
  eventslist:any;
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public service:UserserviceProvider,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserprofilePage');
    this.service.getUserdetails().subscribe(res => {
      console.log(res);
      this.name = res[0].name;
      this.email = res[0].email;
      this.mobile = res[0].mobile;
      this.college = res[0].college;
      this.events = res[0].events;
      this.eventslist = res[0].events.events;
      this.teamevents = res[0].team;
      console.log(this.events);
    })
  }
  edit(){
    let mobile = {
      mobile:this.mobile
    }
    this.service.updateProfile(mobile).subscribe(res => {
      console.log(res);
      this.data = res;
      let toast = this.toastCtrl.create({
        message: this.data,
        duration: 2000,
        position: 'middle'
      });
      toast.present(toast);
    })
  }

}
