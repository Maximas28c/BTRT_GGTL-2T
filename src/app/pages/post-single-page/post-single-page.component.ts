import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Post } from 'src/app/models/post';
import {PostsService} from "../../services/posts.service";
import {CategoriesService} from "../../services/categories.service";
import {Category} from "../../models/category";

@Component({
  selector: 'app-post-single-page',
  templateUrl: './post-single-page.component.html',
  styleUrls: ['./post-single-page.component.scss']
})
export class PostSinglePageComponent implements OnInit {

  public post!: Post;
  public categoriesList!: Category[]

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsService: PostsService,
    private categoriesService: CategoriesService

  ) { }

  ngOnInit(): void {
    this.getPostById()
    this.getCategoriesList()
  }

   getPostById(){
     this.route.params.subscribe(
       p=>{
          this.postsService.getAllPosts().subscribe(
            posts=>{
              this.post = posts.find( (post: Post) => post.id == p['id'])
            }
          )
       }
     )
   }

   getCategoriesList(){
     this.categoriesService.getAllCategories().subscribe(
      data =>{
        this.categoriesList = data
      }
    )
   }

  navigateToCategory(catId:any){
    this.router.navigate([`category/'${catId}'`])
  }

}
