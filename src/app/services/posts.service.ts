import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../models/category";
import {Post} from "../models/post"

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllPosts(): Observable<any>{
    return this.http.get("assets/mock/posts.json")
  }

}
