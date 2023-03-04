import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  constructor(private authService: AuthService) {}
  userData: any = {};

  ngOnInit() {
    // Subscribe to the behavior subject in the authentication service
    this.authService.loggedInUserData$.subscribe(data => {
      this.userData = data;
    });
  }

  onLogOut() {
    this.authService.logout();
  }
}
