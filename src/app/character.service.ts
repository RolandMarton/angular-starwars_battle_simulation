import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private readonly apiUrl =
    'https://developer.webstar.hu/rest/frontend-felveteli/v2/characters/';

  constructor(private http: HttpClient, private authService: AuthService) {}

  async getCharacters(): Promise<Observable<any[]>> {
    await this.authService.updateAuthorizationHeader();
    return this.http.get<any[]>(this.apiUrl, this.authService.getHttpOptions);
  }
}
