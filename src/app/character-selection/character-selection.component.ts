import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-character-selection',
  templateUrl: './character-selection.component.html',
  styleUrls: ['./character-selection.component.scss'],
})
export class CharacterSelectionComponent implements OnInit, DoCheck {
  myText = '';
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    if (!this.isAuthenticated) {
      this.authService.logout();
    }
  }

  ngDoCheck(): void {
    const wasAuthenticated = this.isAuthenticated;
    this.isAuthenticated = this.authService.isAuthenticated();
    if (wasAuthenticated && !this.isAuthenticated) {
      this.authService.logout();
    }
  }
}
