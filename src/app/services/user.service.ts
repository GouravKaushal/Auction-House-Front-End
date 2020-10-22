import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'app/models/user';
import { Mail } from 'app/models/mail';
import { Response } from 'app/models/response';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private http: HttpClient) {
    console.log('Inside constructor(private http: HttpClient)');
  }

  private baseUrl: string = 'http://localhost:8080/auction';

  // Service to register user
  registerUser(user: User): Observable<Response> {
    return this.http.post<Response>(this.baseUrl + '/user/register', user);
  }

  // Service to login user or admin
  loginUser(user: User): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/user/login', user, this.options);
  }


  // Service to logout
  logoutUser(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/user/logout', this.options);
  }

  // Service to send mail by admin to particular seller or bidder
  sendMail(mail: Mail): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/admin/send/mail', mail);
  }

}
