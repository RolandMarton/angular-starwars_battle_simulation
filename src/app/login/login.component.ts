import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth.service';
import { Login, ErrorObject } from '../model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @ViewChild('signInForm') signInForm: NgForm;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  onSubmit() {
    console.log(this.signInForm.value);
    this.authService
      .login(this.signInForm.value.email, this.signInForm.value.password)
      .subscribe(
        (response: Login) => {
          console.log(response);
          this.router.navigate(['/character']);
        },
        (error: ErrorObject) => {
          alert(error.error.error);
        }
      );
    this.signInForm.reset();
  }
}
