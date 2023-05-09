import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { httpOptions } from '../utils/httpOptions';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  baseUrl = 'http://localhost:8080/api/stores/';
  productUrl="http://localhost:8080/api/products/ref/";
  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  public getStore(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id, httpOptions);
  }
  public removeProduct(id: number): any{
    console.log("inside remove")
    return this.http.delete(this.productUrl + id, httpOptions);
  }
}
