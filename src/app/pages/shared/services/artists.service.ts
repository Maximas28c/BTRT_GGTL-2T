import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Card} from "../../../models/card";

@Injectable({
  providedIn: 'root'
})
export class ArtistsDataService {

  private selectedArtist = new BehaviorSubject(<Card>{})
  artistCard = this.selectedArtist.asObservable()

  constructor() { }

  selectArtist(artistCard: Card){
    this.selectedArtist.next(artistCard)
  }

}
