import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild, ElementRef } from '@angular/core';

import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';
import { } from '@types/googlemaps';
import {GoogleMaps} from '@ionic-native/google-maps';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
 export class MapPage {
//   // google: any;
// 	// options: GeolocationOptions;
// 	// currentPos: Geoposition;
// 	// @ViewChild('map') mapElement: ElementRef;
// 	// map: any;
//   // constructor(public navCtrl: NavController, public navParams: NavParams,private geolocation: Geolocation) {
//   // }

//   // ionViewDidLoad() {
//   //   console.log('ionViewDidLoad MapPage');
//   // }
//   // getUserPosition() {         // method for getting current location
// 	// 	this.options = {
// 	// 	enableHighAccuracy: false
// 	// 	};
// 	// 	this.geolocation.getCurrentPosition(this.options).then((pos: 					Geoposition) => { 	// getting current position

// 	// 			this.currentPos = pos;

// 	// 			console.log(pos);
		
// 	// 			this.addMap(pos.coords.latitude, 										pos.coords.longitude);		/*calling addMap 		method by giving latitude and longitude to for displaying current location of user on Map.*/

// 	// 			console.log(pos.coords.latitude, pos.coords.longitude)
// 	// 				// displaying latitude longitude on console

// 	// 			},
// 	// 		(err: PositionError) => {
// 	// 			console.log("error : " + err.message);
// 	// 		})
// 	// }
// 	// ionViewDidEnter() {
// 	// 	this.getUserPosition();
// 	// }
// 	// addMap(lat, long) {	 /*method called from getUserPosition() with      latitude longitude & for displaying map */

//   // //	let latLng = new google.maps.LatLng(lat, long);
//   // let latLng = new google.maps.LatLng(17.9941715 ,83.5323287);

// 	// let mapOptions = {
// 	// 	center: latLng,
// 	// 	zoom: 15,
// 	// 	mapTypeId: google.maps.MapTypeId.ROADMAP
// 	// }

// 	// this.map = new google.maps.Map(this.mapElement.nativeElement, 				mapOptions);
// 	// this.addMarker();

// 	// }
// 	// addMarker() { 	// for displaying location with pointer on the map

// 	// 	let marker = new google.maps.Marker({
// 	// 		map: this.map,
// 	// 		animation: google.maps.Animation.DROP,
// 	// 		position: this.map.getCenter()
// 	// 	});

// 	// 	let content = "<p>This is your current position !</p>";
// 	// 	let infoWindow = new google.maps.InfoWindow({
// 	// 	content: content
// 	// 	});

// 	// 	google.maps.event.addListener(marker, 'click', () => {
// 	// 	infoWindow.open(this.map, marker);
// 	// 	});

//   }


//}
addMarker() { 	// for displaying location with pointer on the map

  let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
  });

  let content = "<p>This is your current position !</p>";
  let infoWindow = new google.maps.InfoWindow({
  content: content
  });

  google.maps.event.addListener(marker, 'click', () => {
  infoWindow.open(this.map, marker);
  });
}

google: any;
options: GeolocationOptions;
currentPos: Geoposition;
@ViewChild('map') mapElement: ElementRef;
map: any;
locations:any;
constructor(public navCtrl: NavController,
private googleMaps: GoogleMaps) {}

ionViewDidLoad() {
setTimeout(()=>{
this.loadMap();
}, 1000)
}


loadMap() {
let latLng = new google.maps.LatLng(17.9941715 ,83.5323287);
let mapOptions = {
center: latLng,
zoom: 15,
mapTypeId: google.maps.MapTypeId.ROADMAP
}
 this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 this.addMarker();
console.log(this.locations);
 }

}