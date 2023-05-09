import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpOptions } from '../utils/httpOptions';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, Vendor } from '../utils/intergaces';

@Injectable({
  providedIn: 'root'
})
export class StoresService {
  public baseUrl="http://localhost:8080/api/stores/";
  public vendorUrl="http://localhost:8080/api/vendors/";
  vendor:{stores:any[]|null,}={stores:[]}

  constructor(private http:HttpClient,private router:Router) { }
  
  public getStores() { 
    return this.http.get<Store[]>(this.baseUrl,httpOptions); 
   }
  public getVendor(id:number):Observable<Vendor>  { 
    return this.http.get<Vendor>(this.vendorUrl+id,httpOptions); 
   }
   public deleteStore(id:number) { 
    return this.http.delete(this.baseUrl+id,httpOptions).subscribe(data=>data && this.router.navigateByUrl("/stores")); 
   }
}
