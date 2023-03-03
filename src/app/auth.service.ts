import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, throwError, catchError } from 'rxjs';
import { Login } from './model/login';
import { CookieOptions, CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly jwtTokenKey = 'token';
  private readonly refreshTokenKey = 'refreshToken';
  private refreshIntervalId: any;
  private logInData: {
    refreshToken?: string;
    username?: string;
    password?: string;
  } = {};

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {}

  isAuthenticated(): boolean {
    const jwtToken = this.cookieService.get(this.jwtTokenKey);
    return jwtToken !== null && !this.isJwtTokenExpired(jwtToken);
  }

  login(email: string, password: string): Observable<Login> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Applicant-Id': 'LrC5EqPa',
      }),
    };

    this.logInData = {
      username: email,
      password: password,
    };

    return this.http
      .post<Login>(
        'https://developer.webstar.hu/rest/frontend-felveteli/v2/authentication/',
        this.logInData,
        httpOptions
      )
      .pipe(
        tap((response) => {
          this.logInData.refreshToken = response.refreshToken;
          this.saveJwtToken(response.token);
          this.saveRefreshToken(response.refreshToken);
        })
      );
  }

  logout() {
    clearInterval(this.refreshIntervalId);
    this.cookieService.delete(this.jwtTokenKey);
    this.cookieService.delete(this.refreshTokenKey);
    this.router.navigate(['/']);
  }

  refreshAccessToken(): Observable<Login> {
    const refreshToken = this.cookieService.get(this.refreshTokenKey);
    if (!refreshToken) {
      this.logout();
      return throwError('Refresh token not found.');
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Applicant-Id': 'LrC5EqPa',
      }),
    };

    this.logInData.refreshToken = refreshToken;

    return this.http
      .post<Login>(
        'https://developer.webstar.hu/rest/frontend-felveteli/v2/authentication/',
        this.logInData,
        httpOptions
      )
      .pipe(
        tap((response) => {
          console.log(response);
          this.saveJwtToken(response.token);
          this.saveRefreshToken(response.refreshToken);
        }),
        catchError((error) => {
          console.log(error);
          this.logout();
          return throwError(error);
        })
      );
  }

  private refreshAccessTokenInterval() {
    clearInterval(this.refreshIntervalId); // clear previous interval
    const refreshInterval = 30000; // 10 seconds
    this.refreshIntervalId = setInterval(() => {
      const refreshToken = this.getRefreshToken();
      if (refreshToken) {
        this.refreshAccessToken().subscribe(
          (response) => {
            this.saveJwtToken(response.token);
          },
          (error) => {
            console.log(error);
            this.logout();
          }
        );
      }
    }, refreshInterval);
  }

  private saveJwtToken(token: string) {
    const jwtHelper = new JwtHelperService();
    const expirationDate = jwtHelper.getTokenExpirationDate(token);
    const options: CookieOptions = {
      expires: expirationDate || undefined,
      sameSite: 'Strict',
    };
    this.cookieService.set(this.jwtTokenKey, token, options);
    console.log('This is my Jwt Token: ' + this.getJwtToken());
    this.refreshAccessTokenInterval();
  }

  private saveRefreshToken(token: string) {
    const expirationDate = new Date(
      new Date().getTime() + 1000 * 60 * 60 * 24 * 7
    );
    const options: CookieOptions = {
      expires: expirationDate,
      sameSite: 'Strict',
    };
    this.cookieService.set(this.refreshTokenKey, token, options);
    console.log('This is my Refresh Token: ' + this.getRefreshToken());
  }

  private getJwtToken(): string {
    return this.cookieService.get(this.jwtTokenKey);
  }

  private getRefreshToken(): string {
    return this.cookieService.get(this.refreshTokenKey);
  }

  private isJwtTokenExpired(token: string): boolean {
    const jwtHelper = new JwtHelperService();
    const isExpired = jwtHelper.isTokenExpired(token);
    return isExpired;
  }
}
