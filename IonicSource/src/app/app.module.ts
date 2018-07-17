import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TechPage } from '../pages/tech/tech';

import { CsePage } from '../pages/cse/cse';
import { ItPage } from '../pages/it/it';
import { EcePage } from '../pages/ece/ece';
import { EeePage } from '../pages/eee/eee';
import { MechPage } from '../pages/mech/mech';
import { CivilPage } from '../pages/civil/civil';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import{UserserviceProvider}from'../providers/userservice/userservice'
import { HttpModule } from '@angular/http';

import { ForgotPage } from '../pages/forgot/forgot';
import { Geolocation } from '@ionic-native/geolocation';
import { MapPage } from '../pages/map/map';
import {
  GoogleMaps
} from '@ionic-native/google-maps';
import { NonTechnicalPage } from '../pages/non-technical/non-technical';
import { CulturalPage } from '../pages/cultural/cultural';
import{MusicmastiPage}from'../pages/musicmasti/musicmasti';
import{QuzPage}from'../pages/quz/quz';
import{SelfiehuntPage}from'../pages/selfiehunt/selfiehunt';
import{TreasurePage}from'../pages/treasure/treasure';
import { EventdetailPage } from '../pages/eventdetail/eventdetail';
import { LogoutPage } from '../pages/logout/logout';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { AdminHomePage } from '../pages/admin-home/admin-home';
import { RegisteredUsersPage } from '../pages/registered-users/registered-users';
import { RetrieveEventPage } from '../pages/retrieve-event/retrieve-event';
import { RetrieveUsersPage } from '../pages/retrieve-users/retrieve-users';
import { TeamregisterPage } from '../pages/teamregister/teamregister';
import { UserprofilePage } from '../pages/userprofile/userprofile';
import { AdminserviceProvider } from '../providers/adminservice/adminservice';
import { UpdateEventPage } from '../pages/update-event/update-event';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TechPage,CsePage,ItPage,EcePage,EeePage,MechPage,CivilPage,LoginPage,SignupPage,ForgotPage,MapPage,NonTechnicalPage,
    CulturalPage,MusicmastiPage,QuzPage,SelfiehuntPage,TreasurePage,EventdetailPage,LogoutPage,AboutusPage,
    AdminHomePage,RegisteredUsersPage,RetrieveEventPage,RetrieveUsersPage,TeamregisterPage,UserprofilePage,UpdateEventPage
   ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  TechPage,CsePage,ItPage,EcePage,EeePage,MechPage,CivilPage,LoginPage,SignupPage,ForgotPage,MapPage,NonTechnicalPage,
  CulturalPage,MusicmastiPage,QuzPage,SelfiehuntPage,TreasurePage,EventdetailPage,LogoutPage,AboutusPage,
  AdminHomePage,RegisteredUsersPage,RetrieveEventPage,RetrieveUsersPage,TeamregisterPage,UserprofilePage,UpdateEventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,GoogleMaps,UserserviceProvider,AdminserviceProvider
  
  ]
})
export class AppModule {}
