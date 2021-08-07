import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Card } from 'src/app/models/card';
import {ArtistsDataService} from "../../services/artists.service";

@Component({
  selector: 'app-artists-cards',
  templateUrl: './artists-cards.component.html',
  styleUrls: ['./artists-cards.component.scss']
})
export class ArtistsCardsComponent implements OnInit {

  @Input() artistsCardsInput!: Card[]
  @Output() clickOnArtistCardEvent = new EventEmitter<any>()

  constructor(
    private artistsDataService: ArtistsDataService
  ) { }

  ngOnInit(): void {
  }

  clickOnArtistCard(artistCard:Card){
    this.clickOnArtistCardEvent.emit()
    this.artistsDataService.selectArtist(artistCard)
  }

}
