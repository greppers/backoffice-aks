import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
export class AddStoreService {
  public storeUrl = 'http://localhost:8080/api/stores/';
  constructor(private http: HttpClient,private router:Router) { }
  addStoreToVendor(id:number,data:any){
    return this.http.post(this.storeUrl+id, data, httpOptionsFiles).subscribe(data=>this.router.navigateByUrl("/stores"));
  }
}
