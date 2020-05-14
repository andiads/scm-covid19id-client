import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { Items } from '../models/items';

//let USERS_API_URL = "http://localhost:8888/api/v1/users/";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /* DEVELOPMENT ENV URL
  private USERS_API_URL = 'http://localhost:8888/api/v1/users';
  
  private VIEW_USERS_API_URL = 'http://localhost:8888/api/v1/v-users';
  */

  /**
   * 
   * PRODUCTION ENV URL 
   */

   private USERS_API_ENDPOINT = "https://scm-covid19id-app.herokuapp.com/api/v1/users";
   //private VIEW_USERS_API_ENDPOINT = "https://scm-covid19id-app.herokuapp.com/api/v1/v-users";

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<any> {
    //return this.http.get(`${this.VIEW_USERS_API_URL}/${id}`);
    return this.http.get(`${this.USERS_API_ENDPOINT}/v-users/${id}`);
  }

  createUser(user: Object): Observable<Object> {
    //return this.http.post(`${this.USERS_API_URL}/add`, user);
    return this.http.post(`${this.USERS_API_ENDPOINT}/add`, user);
  }

  // tslint:disable-next-line: ban-types
  updateUser(id: number, value: any): Observable<Object> {
    //return this.http.put(`${this.USERS_API_URL}/${id}`, value);
    return this.http.put(`${this.USERS_API_ENDPOINT}/update/${id}`, value);
  }

  getUserList(): Observable<any> {
    //return this.http.get(`${this.VIEW_USERS_API_URL}`);
    return this.http.get(`${this.USERS_API_ENDPOINT}/v-users`);
  }


  /*
  *
  * Items Section
  * 
  */

  getItem(id: number): Observable<any> {
    return this.http.get(`${this.USERS_API_ENDPOINT}/v-items/${id}`);
  }

  getItemsList(): Observable<any> {
    return this.http.get(`${this.USERS_API_ENDPOINT}/v-items`);
  }

  getAvailableItemsList(): Observable<any> {
    return this.http.get(`${this.USERS_API_ENDPOINT}/v-items/available`);
  }

  createItem(item: Object): Observable<Object> {
    return this.http.post(`${this.USERS_API_ENDPOINT}/items/add`, item);
  }
 
  updateItem(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.USERS_API_ENDPOINT}/items/update/${id}`, value);
  }

  deleteItem(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.USERS_API_ENDPOINT}/items/delete/${id}`, value);
  }
  
}
