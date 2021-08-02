import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostSinglePageComponent } from './post-single-page/post-single-page.component';
import {SharedModule} from "../shared/shared.module";
import { HomePageComponent } from './home-page/home-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import {PagesRoutingModule} from "./pages-routing.module";
import {TaskPageComponent} from "./task-page/task-page.component";
import {PdfViewerModule} from "ng2-pdf-viewer";

@NgModule({
  declarations: [
    PostSinglePageComponent,
    HomePageComponent,
    CategoryPageComponent,
    PostsPageComponent,
    TaskPageComponent
  ],
  exports: [
    PagesRoutingModule,
    HomePageComponent,
    CategoryPageComponent,
    PostsPageComponent,
    PostSinglePageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    PdfViewerModule
  ],
  providers: [
    PagesRoutingModule
  ],
})
export class PagesModule {}
