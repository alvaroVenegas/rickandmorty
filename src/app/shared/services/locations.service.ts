import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private httpClient: HttpClient) { }

  getLocations(): Observable<any> {
    return this.httpClient.get('https://rickandmortyapi.com/api/location');
  }

  getLocation(idLocation:any): Observable<any> {
    return this.httpClient.get('https://rickandmortyapi.com/api/location/' + idLocation);
  }
}
