import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import { HomePageComponent } from './home-page/home-page.component';
import {PagesRoutingModule} from "./pages-routing.module";
import {TaskPageComponent} from "./task-page/task-page.component";
import {PdfViewerModule} from "ng2-pdf-viewer";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HomePageComponent,
    TaskPageComponent
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
        ReactiveFormsModule
    ],
  providers: [
    PagesRoutingModule
  ],
})
export class PagesModule {}
