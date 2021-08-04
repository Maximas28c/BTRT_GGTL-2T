import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {Category} from "../../models/category";
import {Router} from "@angular/router";
import {PostsService} from "../../services/posts.service";
import {Post} from "../../models/post";
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public categoriesList!: Category[]
  public posts!: Post[]
  //
  public loginForm!: FormGroup;
  public loginData = {
    login: '',
    password: ''
  }
  public isDisabled = true

  @Output() login: EventEmitter<any> = new EventEmitter();

  constructor(
    //
    public  fb:FormBuilder,
    //
    private categoriesService: CategoriesService,
    private postsService: PostsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCategoriesList()
    this.getAllPosts()
    //
    this.loginForm = this.fb.group({
      username:'',
      password:''
    })
    //
    this.loginForm.valueChanges.subscribe(
      data => {
        this.loginData.login = data.login
        this.loginData.password = data.password
        if (data.login !== '' && data.password !== ''){
          this.isDisabled = false
        }
      }
    )
  }

  ///
  sendData(){
    this.login.emit(this.loginData)
  }
  ///
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
