import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPageComponent } from "./category-page/category-page.component";
import { PostSinglePageComponent } from "./post-single-page/post-single-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import {TaskPageComponent} from "./task-page/task-page.component";

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'category/:id', component: CategoryPageComponent },
  { path: 'post/:id', component: PostSinglePageComponent},
  { path: 'task', component: TaskPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
