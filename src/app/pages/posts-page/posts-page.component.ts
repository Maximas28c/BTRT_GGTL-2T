import { Component, OnInit, Input } from '@angular/core';
import {Post} from "../../models/post";
import {Router} from "@angular/router";
import {CategoriesService} from "../../services/categories.service";
import {Category} from "../../models/category";

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {

  public categoriesList!: Category[]
  public sortIsAsc: boolean = true

  @Input() posts!: Post[]

  constructor(
    private categoriesService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCategoriesList()
  }

  navigateToPost(postId: number){
    this.router.navigate([`post/${postId}`])
  }

  navigateToCategory(categoryId: number){
    this.router.navigate([`category/${categoryId}`])
  }

  sortByDate(isAsc:boolean){
    if (!isAsc) {
      this.posts = this.posts.sort((a, b)=>a.createdAt===b.createdAt? 1 : -1)
    } else {
      this.posts = this.posts.sort((a, b)=>a.createdAt!==b.createdAt? -1 : 1)
    }
  }

  getCategoriesList(){
      this.categoriesService.getAllCategories().subscribe(
      data =>{
        this.categoriesList = data
      }
    )
  }
}
