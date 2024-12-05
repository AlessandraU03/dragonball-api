import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransformationsService {
  private baseUrl = 'https://dragonball-api.com/api';

  constructor(private http: HttpClient) {}

  getTransformationsByCharacterId(characterId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/transformations/${characterId}`);
  }
}
