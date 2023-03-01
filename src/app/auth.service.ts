import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './model/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<Login> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Applicant-Id': 'LrC5EqPa',
      }),
    };

    const data = {
      username: email,
      password: password,
    };

    return this.http
      .post<Login>(
        'https://developer.webstar.hu/rest/frontend-felveteli/v2/authentication/',
        data,
        httpOptions
      );
  }

  saveToken(token: string) {
    console.log(token);
  }
}
