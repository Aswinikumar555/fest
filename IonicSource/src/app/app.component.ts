import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { timer } from 'rxjs/observable/timer';
import { TechPage } from '../pages/tech/tech';
import { MapPage } from '../pages/map/map';
import{NonTechnicalPage}from'../pages/non-technical/non-technical';
import{CulturalPage}from'../pages/cultural/cultural';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { UserprofilePage } from '../pages/userprofile/userprofile';
import { UserserviceProvider } from '../providers/userservice/userservice';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  showSplash = true;
  pages: Array<{title: string, component: any}>;
  pag: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public men:MenuController, public splashScreen: SplashScreen,public service: UserserviceProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    
    this.pages = [
      { title: 'Home', component: HomePage },
      {title:'Login/signup',component:LoginPage},
      { title: 'DEPARTMENT', component: TechPage },
      { title: 'NonTechnical Events', component: NonTechnicalPage },
      { title: 'Cultural Events', component: CulturalPage },
      {title:'Map',component:MapPage},
      {title:'About Zest',component:AboutusPage}

    ];
    this.pag=[
      { title: 'Home', component: HomePage },
      {title:'PROFILE',component:UserprofilePage},
      { title: 'DEPARTMENT', component: TechPage },
      { title: 'NonTechnical Events', component: NonTechnicalPage },
      { title: 'Cultural Events', component: CulturalPage },
      {title:'Map',component:MapPage},
      {title:'About Zest',component:AboutusPage},
      {title:'Logout',component:LogoutPage}
    ];
    this.service.check().subscribe(res =>{
      let n = "No Session";
      if(res === n){
        this.men.enable(true, "k");
        this.men.enable(false, "l");
      }
      else{
        this.men.enable(true, "l");
        this.men.enable(false, "k");
      }
    })
    }
    
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(3000).subscribe(() => this.showSplash = false)
    
    });
  }
  
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    
    var h = "HomePage(";
    if(page.component.toString().substr(9,9) === h){
      //console.log(page.component.toString().substr(9,9));
      this.nav.setRoot(page.component);

    }
    else{
    this.nav.push(page.component);
    }
   
  }
  
}