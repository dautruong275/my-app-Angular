import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:9999/api/v1'; // Thay đổi theo backend

  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    debugger;
    return this.http.post(`${this.apiUrl}/auth/login`, user);
  }
  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/register`, user);
  }
}
