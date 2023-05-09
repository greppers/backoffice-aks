import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpOptions } from '../utils/httpOptions';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CreateCarcirogenicsService {
  public carcirogenics = 'http://localhost:8080/api/carcirogenics/all';

  constructor(private http:HttpClient,private router:Router) { }
  addAllElements(data:any){
    console.log("api")
    this.http.post(this.carcirogenics,data,httpOptions).subscribe(data=>this.router.navigateByUrl("/carcirogenics"))
  }
}
