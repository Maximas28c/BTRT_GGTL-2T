import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";
import {TaskPageComponent} from "./task-page/task-page.component";

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'task', component: TaskPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
