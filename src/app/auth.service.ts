import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, throwError, catchError, BehaviorSubject } from 'rxjs';
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
  private hasLoggedOut = false;
  private logInData: {
    refreshToken?: string;
    username?: string;
    password?: string;
  } = {};

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Applicant-Id': 'LrC5EqPa',
    }),
  };

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {
    this.updateAuthorizationHeader();
    const userData = localStorage.getItem('loggedInUserData');
    if (userData) {
      this.loggedInUserData.next(JSON.parse(userData));
    }
  }

  async updateAuthorizationHeader() {
    const jwtToken = await this.getJwtToken();
    this.httpOptions.headers = this.httpOptions.headers.set(
      'Application-Authorization',
      jwtToken
    );
  }

  private async getJwtToken(): Promise<string> {
    return await this.cookieService.get(this.jwtTokenKey);
  }

  get getHttpOptions() {
    return this.httpOptions;
  }

  private loggedInUserData = new BehaviorSubject<any>({});

  get loggedInUserData$() {
    return this.loggedInUserData.asObservable();
  }

  isAuthenticated(): boolean {
    const jwtToken = this.cookieService.get(this.jwtTokenKey);
    const refreshToken = this.cookieService.get(this.refreshTokenKey);

    if (!jwtToken || !refreshToken) {
      if (!this.hasLoggedOut) {
        this.hasLoggedOut = true;
      }
      return false;
    }

    if (this.isTokenExpired(jwtToken)) {
      if (!this.logInData.refreshToken) {
        this.hasLoggedOut = true;
        return false;
      }
      this.refreshAccessToken().subscribe(
        (response) => {
          // Token has been refreshed, do nothing
        },
        (error) => {
          console.log(error);
          if (!this.hasLoggedOut) {
            this.hasLoggedOut = true;
          }
        }
      );
    }

    return !this.isTokenExpired(jwtToken);
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
          const userData = {
            firstName: response.user.firstName,
            lastName: response.user.lastName,
          };
          this.loggedInUserData.next(userData);
          localStorage.setItem('loggedInUserData', JSON.stringify(userData));
          this.saveJwtToken(response.token);
          this.saveRefreshToken(response.refreshToken);
        })
      );
  }

  logout() {
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

    this.logInData.refreshToken = refreshToken;

    return this.http
      .post<Login>(
        'https://developer.webstar.hu/rest/frontend-felveteli/v2/authentication/',
        this.logInData,
        this.httpOptions
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

  private saveJwtToken(token: string) {
    const jwtHelper = new JwtHelperService();
    const expirationDate = jwtHelper.getTokenExpirationDate(token);
    const options: CookieOptions = {
      expires: expirationDate || undefined,
      sameSite: 'Strict',
    };
    this.cookieService.set(this.jwtTokenKey, token, options);
    console.log('This is my Jwt Token: ' + this.getJwtToken());
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

  private getRefreshToken(): string {
    return this.cookieService.get(this.refreshTokenKey);
  }

  private isTokenExpired(token: string): boolean {
    const jwtHelper = new JwtHelperService();
    const isExpired = jwtHelper.isTokenExpired(token);
    return isExpired;
  }
}
