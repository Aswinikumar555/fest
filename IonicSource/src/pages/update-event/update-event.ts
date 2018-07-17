import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RetrieveEventPage } from '../retrieve-event/retrieve-event';
import { AdminserviceProvider } from '../../providers/adminservice/adminservice';
/**
 * Generated class for the UpdateEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-event',
  templateUrl: 'update-event.html',
})
export class UpdateEventPage {
  branchname:any;
  eventname:any;
  description:any;
  time:any;
  venue:any;
  RegistrationFee:any;
  Organizers:any;
  Organizersnumber:any;
  Organizersmail:any;
  teamsize:any;
  constructor(public navCtrl: NavController,public toastCtrl:ToastController, public navParams: NavParams,public service:AdminserviceProvider) {
    this.branchname = this.navParams.get('branchname');
    this.eventname = this.navParams.get('eventname');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateEventPage');
    let event = {
      branchname:this.branchname,
      eventname:this.eventname
    }
    this.service.retrieveEvents(event).subscribe(res=>{
      this.description = res[0].description;
      this.time = res[0].time;
      this.venue = res[0].venue;
      this.RegistrationFee = res[0].RegistrationFee;
      this.Organizers = res[0].Organizers;
      this.Organizersnumber = res[0].Organizersnumber;
      this.Organizersmail = res[0].Organizersmail;
      this.teamsize = res[0].teamsize;
    })
  }
  sub(){
    let eventdata = {
      branchname:this.branchname,
      eventname:this.eventname,
      description:this.description,
      time:this.time,
      venue:this.venue,
      RegistrationFee:this.RegistrationFee,
      Organizers:this.Organizers,
      Organizersmail:this.Organizersmail,
      Organizersnumber:this.Organizersnumber,
      teamsize:this.teamsize
    }
    this.service.updateEvents(eventdata).subscribe(res=>{
      console.log(res);

      let toast = this.toastCtrl.create({
        message: res,
        duration: 2000,
        position: 'middle'
      });
  
      toast.present(toast);

    })
    
  }

}
