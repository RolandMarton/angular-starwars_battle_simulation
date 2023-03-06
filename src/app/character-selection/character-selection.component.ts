import {
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';
import { AuthService } from '../auth.service';
import { CharacterService } from '../character.service';
import { Character } from '../model/character';

@Component({
  selector: 'app-character-selection',
  templateUrl: './character-selection.component.html',
  styleUrls: ['./character-selection.component.scss'],
})
export class CharacterSelectionComponent implements OnInit, DoCheck {
  myText = '';
  isAuthenticated: boolean = false;
  isFilled: boolean = false;
  characters: Character[] = [];

  constructor(
    private authService: AuthService,
    private characterService: CharacterService,
  ) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    if (!this.isAuthenticated) {
      this.authService.logout();
    }

    this.characterService.getCharacters().subscribe(
      (response: any) => {
        console.log(response);
        this.characters = response.characters;
        console.log(this.characters);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngDoCheck(): void {
    const wasAuthenticated = this.isAuthenticated;
    this.isAuthenticated = this.authService.isAuthenticated();
    if (wasAuthenticated && !this.isAuthenticated) {
      this.authService.logout();
    }
  }

  getColor(side: string) {
    switch (side) {
      case 'DARK':
        return 'black';
      case 'LIGHT':
        return 'white';
      default:
        return null;
    }
  }
}
