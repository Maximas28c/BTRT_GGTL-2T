import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {Category} from "../../models/category";
import {Router} from "@angular/router";
import {PostsService} from "../../services/posts.service";
import {Post} from "../../models/post";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public categoriesList!: Category[]
  public posts!: Post[]

  constructor(
    private categoriesService: CategoriesService,
    private postsService: PostsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCategoriesList()
    this.getAllPosts()
  }
  getCategoriesList(){
    this.categoriesService.getAllCategories().subscribe(
      data=>{
          this.categoriesList = data
      }
    )
  }
  getAllPosts(){
    this.postsService.getAllPosts().subscribe(
      posts=>{
        this.posts = posts
      }
    )
  }
  navigateToCategory(categoryId:any){
    this.router.navigate([`/category/${categoryId}`],)
  }

}
