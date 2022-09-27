import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AcronymResponse } from '../shared/types/acronyms';

@Injectable({
  providedIn: 'root',
})
export class AcronymService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  //get all acronyms
  getAcronyms(): Observable<AcronymResponse> {
    return this.http.get<AcronymResponse>(`${this.url}/history`);
  }

  addAcronyms(acronym: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.url}/acronym`, {
      params: { value: acronym },
    });
  }
}
