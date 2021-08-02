import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { CardPostComponent } from './components/card-post/card-post.component';
import { MenuComponent } from './components/menu/menu.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "../app-routing.module";



@NgModule({
  declarations: [
    CardPostComponent,
    MenuComponent
  ],
    exports: [
        MenuComponent,
        CardPostComponent
    ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
