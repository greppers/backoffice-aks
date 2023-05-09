import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private http:HttpClient) { }
  BASE='http://localhost:8080';
  public getClients(){
    return this.http.get(this.BASE + '/getClients')
  }

  public updateClients(client:any){
    return this.http.put(this.BASE + '/updateSellers', client)

  }

  public deleteClient(id:any){
    return this.http.delete(this.BASE + '/deleteSellers?id=' + id)

  }

  
	signup(request: Request): Observable<any> {
		return this.http.post<any>(this.BASE + '/signup', request, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'}).pipe(map((resp) => {                                                         
			return resp;
		}));
	}
}