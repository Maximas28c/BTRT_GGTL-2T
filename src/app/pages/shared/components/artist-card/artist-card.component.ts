import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ArtistsDataService} from "../../services/artists.service";
import {Subscription} from "rxjs";
import {Card} from "../../../../models/card";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit {

  @Output() closeSingleArtistCardEvent = new EventEmitter<any>()

  public artistCard!:Card
  public selectedArtistSub!:Subscription
  close = faTimes

  constructor(
    private artistsDataService: ArtistsDataService
  ) { }

  ngOnInit(): void {
    this.selectedArtistSub = this.artistsDataService.artistCard.subscribe(artistCard=>{
      this.artistCard = artistCard
    })
  }

  closeSingleArtistCard(){
    this.closeSingleArtistCardEvent.emit()
  }

}
