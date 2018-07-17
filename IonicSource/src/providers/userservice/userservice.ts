import { Injectable } from '@angular/core';
import { Http, Headers,Response,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

/*
  Generated class for the UserserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class UserserviceProvider {
  data: any;
  constructor(public http:Http) {
    this.data = null;
    console.log('Hello BrancheventdetailProvider Provider');
  }
  //registerToApp
  addUser(body: Object): Observable<any> {
    
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post('http://localhost:3000/users/register', body, options) // ...using post request
                     .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                     .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }
  //resetPassword
  resetPassword(body: Object): Observable<any> {
    
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post('http://localhost:3000/users/forgot', body, options) // ...using post request
                     .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                     .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }
  //loginToApp
  loginUser(body: Object): Observable<any> {
    
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post('http://localhost:3000/users/login', body, options) // ...using post request
                    .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                    .catch((err:any) => Observable.throw(err.json().error || 'Server error')); //...errors if any
  }
  
  //eventRegister
  addEvent(body: Object): Observable<any> {
    
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post('http://localhost:3000/users/eventregister', body, options) // ...using post request
                    .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  } 
  //teamRegister
  addTeam(body: Object): Observable<any> {
    
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post('http://localhost:3000/users/teamregister', body, options) // ...using post request
                    .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  } 
  //userProfile
  getUserdetails():Observable<any> {
    return this.http.get('http://localhost:3000/users/profile')
                   // ...and calling .json() on the response to return data
                    .map((res:Response) => res.json())
                    //...errors if any
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }
  //updateUserProfile
  updateProfile(body: Object): Observable<any> {
    
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post('http://localhost:3000/users/updateprofile', body, options) // ...using post request
                    .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }
  //logout
  logoutUser() : Observable<any> {
    return this.http.get('http://localhost:3000/users/logout')
                   // ...and calling .json() on the response to return data
                    .map((res:Response) => res.json())
                    //...errors if any
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }


  //retrieveEvents  
  getEvent(body: Object): Observable<any> {
    
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post('http://localhost:3000/events/retrieve', body, options) // ...using post request
                    .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  } 

  //check session for menu
  check() : Observable<any> {
    return this.http.get('http://localhost:3000/users/checksession')
                   // ...and calling .json() on the response to return data
                    .map((res:Response) => res.json())
                    //...errors if any
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }
}