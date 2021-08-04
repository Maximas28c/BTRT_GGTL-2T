import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import { MenuComponent } from './components/menu/menu.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "../app-routing.module";



@NgModule({
  declarations: [
    MenuComponent
  ],
    exports: [
        MenuComponent,
    ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
