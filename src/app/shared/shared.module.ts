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



@NgModule({
  declarations: [
    MenuComponent,
    CardComponent,
    LoaderComponent,
    PillComponent,
    InputComponent,
    TypeaheadComponent
  ],
    exports: [
        MenuComponent,
        LoaderComponent,
        CardComponent,
    ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
