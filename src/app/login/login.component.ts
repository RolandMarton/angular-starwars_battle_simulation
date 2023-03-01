import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('signInForm') signInForm: NgForm;

  onSubmit() {
    console.log(this.signInForm.value);
    this.signInForm.reset();
  }
}
