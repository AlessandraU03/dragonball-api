import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  private baseUrl = 'https://dragonball-api.com/api';

  constructor(private http: HttpClient) {}

  getPlanetById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/planets/${id}`);
  }
}
