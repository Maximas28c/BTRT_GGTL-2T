import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import { HomePageComponent } from './home-page/home-page.component';
import {PagesRoutingModule} from "./pages-routing.module";
import {TaskPageComponent} from "./task-page/task-page.component";
import {PdfViewerModule} from "ng2-pdf-viewer";
import {ReactiveFormsModule} from "@angular/forms";
import { ArtistsCardsComponent } from './shared/components/artists-cards/artists-cards.component';
import { ArtistCardComponent } from './shared/components/artist-card/artist-card.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    HomePageComponent,
    TaskPageComponent,
    ArtistsCardsComponent,
    ArtistCardComponent
  ],
  exports: [
    PagesRoutingModule,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    PdfViewerModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
    PagesRoutingModule
  ],
})
export class PagesModule {}
