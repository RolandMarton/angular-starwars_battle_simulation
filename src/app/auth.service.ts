import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './model/login';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  isAuthenticated(): boolean {
    const jwtToken = this.cookieService.get('jwtToken');
    return jwtToken !== '';
  }

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

    return this.http.post<Login>(
      'https://developer.webstar.hu/rest/frontend-felveteli/v2/authentication/',
      data,
      httpOptions
    );
  }

  saveToken(token: string) {
    console.log('This is the token: ' + token);
    this.cookieService.set('jwtToken', token);
  }
}
