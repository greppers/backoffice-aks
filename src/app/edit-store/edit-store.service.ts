import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpOptions } from '../utils/httpOptions';
import { Router } from '@angular/router';

export const httpOptionsFiles = {
  headers: new HttpHeaders({
    // 'Content-Type': 'multipart/form-data',
    Authorization: sessionStorage.getItem('token') || '',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class EditStoreService {
  public baseUrl="http://localhost:8080/api/stores/";


  constructor(private http:HttpClient,private router:Router) { }
  public getStore(id:number) { 
    return this.http.get(this.baseUrl+id,httpOptionsFiles); 
   }
   public editStore(id:number,data:any) { 
    return this.http.put(this.baseUrl+id,data,httpOptionsFiles).subscribe(data=>data&&this.router.navigateByUrl("/store/"+id)); 
   }
}
