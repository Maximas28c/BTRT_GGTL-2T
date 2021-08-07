import { Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { Artist } from 'src/app/models/artist';
import { Card } from 'src/app/models/card';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public artistsList!: Artist[]
  public artistsCards: Card[] = []
  public initialArtistsCards: Card[] = []

  public isSingle:boolean = false
  public isSearch:boolean = false

  constructor(
    private router: Router,
    private artistsService: ArtistService
  ) { }

  ngOnInit(): void {
    this.getListOfArtists()
  }

  getListOfArtists(){
    this.artistsService.getArtistList().subscribe(
      artists=>{
        this.artistsList = artists
        artists.forEach(
          artist=>{
            let artistCard = <Card>{}

            artistCard.tags = artist.tags
            artistCard.price = artist.price
            artistCard.id = artist.id
            artistCard.name = artist.name
            artistCard.videoUrl = artist.video
            artistCard.imgUrl = artist.picture

            this.artistsCards.push(artistCard)

          }
        )
      }
    )
    this.initialArtistsCards = this.artistsCards
  }

  getFilteredListOfArtistsCard(filter:string){
    this.artistsCards = this.artistsCards.filter(card=>
      card.name.toLowerCase().includes(filter.toLowerCase())
    )
  }

  getSortedListOfArtistsCards(isAsc:boolean){
    if(!isAsc){
      this.artistsCards.sort((a,b)=>a.name.localeCompare(b.name))
    } else {
      this.artistsCards.sort((a,b)=>b.name.localeCompare(a.name))
    }
  }

  toggleSearch(){
    this.isSearch = !this.isSearch
  }
  toggleIsSingle(){
    this.isSingle = !this.isSingle
  }
}
