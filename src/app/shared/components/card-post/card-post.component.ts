import {Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../../../models/post";
import {CategoriesService} from "../../../services/categories.service";
import {Category} from "../../../models/category";

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss']
})
export class CardPostComponent implements OnInit, DoCheck {

  @Input() post!: Post
  @Output() clickPostCard = new EventEmitter<number>()

  public categoryName?: string

  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.getCategoryNameOfPost()
  }
  ngDoCheck(): void {
  }

  cardClick(){
    this.clickPostCard.emit(this.post.id)
  }

  getCategoryNameOfPost(){
    this.categoriesService.getAllCategories().subscribe(
      categories=>{
        this.categoryName = categories.find( (category: Category) => category.id == this.post.category).name
      }
    )
  }

}
