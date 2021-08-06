import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../models/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(
    private http: HttpClient
  ) { }

  getArtistList(): Observable<Artist[]>{
    return this.http.get<Artist[]>('https://gigital-code-sample-api.herokuapp.com/artists/list')
  }

}
