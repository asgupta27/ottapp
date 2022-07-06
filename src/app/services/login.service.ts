import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../login/model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }
  
  validateUserLogin(loginDetail: User): Observable<User>{
    debugger
    console.log('VALIDATELOGIN '+this.baseURL + 'users')
    return this.http.get<User>(this.baseURL + 'users?username='+ loginDetail.username+'&password='+loginDetail.password)
  }
}
