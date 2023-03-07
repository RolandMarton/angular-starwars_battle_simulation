import { Component, DoCheck, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../auth.service';
import { CharacterService } from '../character.service';
import { Character } from '../model/character';

import SwiperCore, {
  Keyboard,
  Pagination,
  Navigation,
  Virtual,
  SwiperOptions,
  Autoplay,
} from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual, Autoplay]);

@Component({
  selector: 'app-character-selection',
  templateUrl: './character-selection.component.html',
  styleUrls: ['./character-selection.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CharacterSelectionComponent implements OnInit, DoCheck {
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 250,
    navigation: true,
    pagination: { clickable: true },
    centeredSlides: true,
    virtual: true,
    keyboard: { enabled: true },
    speed: 2000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };

  myText = '';
  isAuthenticated: boolean = false;
  isFilled: boolean = false;
  characters: Character[] = [];

  constructor(
    private authService: AuthService,
    private characterService: CharacterService
  ) {}

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated();
    if (!this.isAuthenticated) {
      this.authService.logout();
    }

    this.characterService.getCharacters().then((res) =>
      res.subscribe(
        (response: any) => {
          console.log(response);
          this.characters = response.characters;
          console.log(this.characters);
        },
        (error) => {
          console.error(error);
        }
      )
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
