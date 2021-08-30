import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private httpClient: HttpClient) { }


  getCharacters(): Observable<any> {
    return this.httpClient.get('https://rickandmortyapi.com/api/character');
  }

  getCharacter(idCharacter:any): Observable<any> {
    return this.httpClient.get('https://rickandmortyapi.com/api/character/' + idCharacter);
  }


  
}
