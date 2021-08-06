import { Component, OnInit, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {Card} from "../../../models/card";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card!:Card

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
  }

  clickOnPillTag(){
    console.log('just clicked on tag pill')
  }
  clickOnVideoButton(link:any){
    this.document.location.href = link
  }
}
