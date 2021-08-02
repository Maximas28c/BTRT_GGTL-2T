import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import * as categoriesList  from '../../assets/mock/categories.json';
import {Category} from "../models/category";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllCategories(): Observable<any>{
    return this.http.get("assets/mock/categories.json")
  }
}
