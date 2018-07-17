import { Injectable } from '@angular/core';
import { Http, Headers,Response,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
/*
  Generated class for the AdminserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdminserviceProvider {

  constructor(public http: Http) {
    console.log('Hello AdminserviceProvider Provider');
  }
  //retrieveEvents
  retrieveEvents(body: Object): Observable<any> {
    
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers:headers }); // Create a request option

    return this.http.post('http://localhost:3000/admin/viewevent', body, options) // ...using post request
                     .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                     .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }  
  //updateEvents
  updateEvents(body: Object): Observable<any> {
    
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers:headers }); // Create a request option

    return this.http.post('http://localhost:3000/admin/updateevent', body, options) // ...using post request
                     .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                     .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }
  //retrieveUsers
  retrieveUsers(body: Object): Observable<any> {
    
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers:headers }); // Create a request option

    return this.http.post('http://localhost:3000/admin/viewregistrations', body, options) // ...using post request
                     .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                     .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }
}
