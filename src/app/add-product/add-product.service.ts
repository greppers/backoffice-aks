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
  providedIn: 'root',
})
export class AddProductService {
  public baseUrl = 'http://localhost:8080/api/tags';
  public imgAPIURl = 'http://localhost:8080/api/products/img';
  public imgsAPIURl = 'http://localhost:8080/api/products/imgs';
  public productURL='http://localhost:8080/api/products/'

  constructor(private http: HttpClient,private router:Router) {}
  public getTags() {
    return this.http.get(this.baseUrl, httpOptions);
  }
  
  public saveOneFile(image: any) {
    console.log("before api")
    return this.http.post(this.imgAPIURl, image, httpOptionsFiles).subscribe(data=>console.log(data));
  }
  public saveFiles(images: any) {
    console.log("before api")
    // console.log(images);
    
    return this.http.post(this.imgsAPIURl, images, httpOptionsFiles).subscribe(data=>console.log(data));
  }
  public addProductToStore(id:number,formData:any){
    return this.http.post(this.productURL+id, formData, httpOptionsFiles).subscribe(data=>data===null?this.router.navigateByUrl("/toxic"):this.router.navigateByUrl("/store/"+id));
  }
}
