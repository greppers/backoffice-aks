import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { httpOptions } from '../utils/httpOptions';
import { Router } from '@angular/router';
import { httpOptionsFiles } from '../add-store/add-store.service';

@Injectable({
  providedIn: 'root',
})
export class EditProductService {
  baseUrl = 'http://localhost:8080/api/products/';
  composition = 'http://localhost:8080/api/compositions/';
  objectStore = 'http://localhost:8080/api/storage/files';
  constructor(private http: HttpClient, private router: Router) {}
  public getProduct(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id, httpOptions);
  }
  public updateProduct(storeId: number, product: any): any {
    console.log("updating")
    return this.http
      .put(this.baseUrl + storeId, product,httpOptions)
      .subscribe((data) =>
        data === null
          ? this.router.navigateByUrl('/toxic')
          : this.router.navigateByUrl('/store/' + storeId)
      );
  }

  public deleteFiles(files: string[]) {
    return this.http
      .delete(this.objectStore, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: sessionStorage.getItem('token') || '',
        }),
        body: files,
      })
      .subscribe((data) => console.log(data));
  }
}
