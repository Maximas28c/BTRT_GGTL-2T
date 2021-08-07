import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import { MenuComponent } from './components/menu/menu.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "../app-routing.module";
import { CardComponent } from './components/card/card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PillComponent } from './components/pill/pill.component';
import { InputComponent } from './components/input/input.component';
import { TypeaheadComponent } from './components/typeahead/typeahead.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";



@NgModule({
  declarations: [
    MenuComponent,
    CardComponent,
    LoaderComponent,
    PillComponent,
    InputComponent,
    TypeaheadComponent,
    SearchBarComponent
  ],
  exports: [
    MenuComponent,
    LoaderComponent,
    CardComponent,
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
