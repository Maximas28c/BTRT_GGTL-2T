import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Post } from 'src/app/models/post';
import {CategoriesService} from "../../services/categories.service";
import {PostsService} from "../../services/posts.service";
import {Category} from "../../models/category";

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  public postsInCategory!: Post[]
  public categories!: Category[]

  constructor(
    private categoriesService: CategoriesService,
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPostsByCategory()
  }

  getCategoryList(){
    this.categoriesService.getAllCategories().subscribe(
      categories => {
        this.categories = categories
      }
    )
  }

  getPostsByCategory(){
    this.route.params.subscribe(
      p=>{
        this.postsService.getAllPosts().subscribe(
          posts=>{
            this.postsInCategory = posts.filter( (post: Post) => post.category == p['id'])
          }
        )
      }
    )
  }
  navigateToCategory(catId:any){
    this.router.navigate([`category/'${catId}'`])
  }
}
