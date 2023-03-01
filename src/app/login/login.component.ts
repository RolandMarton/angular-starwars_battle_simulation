import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('signInForm') sgnForm: NgForm;

  onSubmit() {
    console.log(this.sgnForm.value);
  }
}
