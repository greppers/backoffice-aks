import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpOptions } from '../utils/httpOptions';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient,private router:Router) {}
  addCategory(catagory: any) {
    this.http
      .post('http://localhost:8080/api/categories', catagory, httpOptions)
      .subscribe(data=> data);
  }
  getCategories() {
    return this.http
      .get('http://localhost:8080/api/categories', httpOptions)
  }
  deleteCategories(id:number) {
    this.http
      .delete('http://localhost:8080/api/categories/'+id, httpOptions).subscribe(data=> data)
  }
}
