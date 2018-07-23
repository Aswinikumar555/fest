import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController} from 'ionic-angular';
import { UserserviceProvider } from '../../providers/userservice/userservice';
import { Http } from '@angular/http';

import { CsePage } from '../cse/cse';
import { LoginPage } from '../login/login';
import { TeamregisterPage } from '../teamregister/teamregister';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the EventdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventdetail',
  templateUrl: 'eventdetail.html',
})
export class EventdetailPage {
  eventname:String;
  description:String;
  branchname;
  imagepath;
  time;
  venue;
  RegistrationFee;
  Organizers;
  Organizersnumber;
  Organizersmail;
  teamsize;
  // a;
  // b;
  // c;
  // d;
  // e;
  items;

  registerresponse;
  constructor(public navCtrl: NavController,public navParams: NavParams,public modalCtrl:ModalController,public http:Http,public service:UserserviceProvider,public toastCtrl: ToastController) {
    this.items="About";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventdetailPage');

    this.branchname = this.navParams.get('branchname');
    this.eventname = this.navParams.get('eventname');
    this.imagepath = this.navParams.get('imagepath');
  let eventdata={
    branchname:this.branchname,
    eventname:this.eventname
  }
  this.service.getEvent(eventdata).subscribe(res=>{
    
    this.branchname = res[0].branchname;
    this.eventname = res[0].eventname;
    this.description = res[0].description;
    this.time = res[0].time;
    this.venue = res[0].venue;
    this.RegistrationFee = res[0].RegistrationFee;
    this.Organizers = res[0].Organizers;
    this.Organizersnumber = res[0].Organizersnumber;
    this.Organizersmail = res[0].Organizersmail;
    this.teamsize = res[0].teamsize;
    //  this.a=this.description.split(":")[0]
    // this.b = this.description.split(":")[1]
    // this.c = this.description.split(":")[1].split(",")[0]
    // this.d = this.description.split(":")[1].split(",")[1]
    // this.e = this.description.split(":")[1].split(",")[2]
    // console.log(res);
    // console.log(this.eventname);
    //  console.log(this.description.split(":")[0]);
  })
  }
  eventRegister(){
    let eventdata = {
      branch:this.branchname,
      events:this.eventname
    }
    this.service.addEvent(eventdata).subscribe(res=>{
      console.log(res);
      this.registerresponse=res;
      let toast = this.toastCtrl.create({
        message: this.registerresponse,
        duration: 2000,
        position: 'top'
      });
  
      toast.present(toast);
      
      var sessionerror = "Please login first";
      if(this.registerresponse === sessionerror){
        this.navCtrl.setRoot(LoginPage);
      }
    })
  }
  teamRegister(){
    this.navCtrl.push(TeamregisterPage,{
      eventname:this.eventname,
      branchname:this.branchname
    });
  }
  
}