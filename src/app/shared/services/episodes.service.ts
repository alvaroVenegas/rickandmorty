import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private httpClient: HttpClient) { }


  getEpisodes(): Observable<any> {
    return this.httpClient.get('https://rickandmortyapi.com/api/episode');
  }

  getEpisode(idEpisode:any): Observable<any> {
    return this.httpClient.get('https://rickandmortyapi.com/api/episode/' + idEpisode);
  }


  
}
