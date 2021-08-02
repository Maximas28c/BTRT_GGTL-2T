import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {Category} from '../../models/category'
import {Router} from "@angular/router";

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {

  public categories!: Category[]
  public pdfSrc = 'assets/task/task.pdf'

  constructor(
    private router: Router,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
  }

  getCategories(){
    this.categoriesService.getAllCategories().subscribe()
  }

  navigateToCategory(categoryId: number){
    this.router.navigate([`category/${categoryId}`])
  }

}
