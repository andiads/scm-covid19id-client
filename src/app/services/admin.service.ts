import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { User } from '../models/user';
import { Roles } from '../models/roles';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  currentUser: User;
  headers: HttpHeaders;

  private ADMIN_API_ENDPOINT = "https://scm-covid19id-app.herokuapp.com/api/v1/admin";
  private VIEW_USERS_API_ENDPOINT = "https://scm-covid19id-app.herokuapp.com/api/v1/admin/v-users";

 constructor(private http: HttpClient) {
   this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   this.headers = new HttpHeaders({
     authorization: 'Bearer ' + this.currentUser.token,
     "Content-Type":"application/json; charset=UTF-8"
   });
  }

 getUser(id: number): Observable<any> {
   //return this.http.get(`${this.VIEW_USERS_API_URL}/${id}`);
   return this.http.get(`${this.VIEW_USERS_API_ENDPOINT}/${id}`);
 }

 createUser(user: Object): Observable<Object> {
   //return this.http.post(`${this.USERS_API_URL}/add`, user);
   return this.http.post(`${this.ADMIN_API_ENDPOINT}/user-add`, JSON.stringify(user), 
   {headers: this.headers});
 }

 // tslint:disable-next-line: ban-types
 updateUser(user: User): Observable<any> {
   //return this.http.put(`${this.USERS_API_URL}/${id}`, value);
   return this.http.put(`${this.ADMIN_API_ENDPOINT}/user-update`, JSON.stringify(user),
   {headers: this.headers});
 }

 getUserList(): Observable<any> {
   //return this.http.get(`${this.VIEW_USERS_API_URL}`);
   return this.http.get(`${this.VIEW_USERS_API_ENDPOINT}`, {headers: this.headers});
 }

 getRolesList(): Observable<any> {
   return this.http.get(`${this.ADMIN_API_ENDPOINT}/roles-all`, {headers: this.headers});
 }
 
 createRole(role: Object): Observable<Object> {
   return this.http.post(`${this.ADMIN_API_ENDPOINT}/roles-add`, JSON.stringify(role),
   {headers: this.headers});
 }
}
