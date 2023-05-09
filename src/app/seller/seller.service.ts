import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Request } from '../model/sign-up-request';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }
  BASE='http://localhost:8080';
  public getSellers(){
    return this.http.get(this.BASE + '/getSellers')
  }

  public updateSellers(seller:any){
    return this.http.put(this.BASE + '/updateSellers', seller)

  }

  public deleteSellers(id:any){
    return this.http.delete(this.BASE + '/deleteSellers?id=' + id)

  }

  
	signup(request: Request): Observable<any> {
		return this.http.post<any>(this.BASE + '/signup', request, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'}).pipe(map((resp) => {                                                         
			return resp;
		}));
	}
}
