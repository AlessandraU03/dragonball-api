import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private baseUrl = 'https://dragonball-api.com/api';

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<any> {
    return this.http.get(`${this.baseUrl}/characters`);
  }

  getCharacterById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/characters/${id}`);
  }
}
