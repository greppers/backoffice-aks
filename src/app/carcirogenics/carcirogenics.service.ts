import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpOptions } from '../utils/httpOptions';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CarcirogenicsService {
  public carcirogenics = 'http://localhost:8080/api/carcirogenics/';
  public delete = 'delete/';
  constructor(private http:HttpClient,private router:Router) { }
  public getCarcirogenics(){
    return this.http.get(this.carcirogenics,httpOptions);
  }
  public deleteCarcirogenic(id:number){
    return this.http.delete(this.carcirogenics+this.delete+id,httpOptions).subscribe(data=>window.location.reload());
  }
}
