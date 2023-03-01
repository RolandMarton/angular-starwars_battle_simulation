import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
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
      .post(
        'https://developer.webstar.hu/rest/frontend-felveteli/v2/authentication/',
        data,
        httpOptions
      );
  }
}
