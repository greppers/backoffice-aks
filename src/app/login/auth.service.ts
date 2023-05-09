import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Request } from '../model/sign-up-request';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	
	private baseUrl = 'http://localhost:8080/';
	isLoggedIn = false;
     tokenExpirationTime = 5000000; // 5 seconds
     expirationTimestamp = Date.now() + this.tokenExpirationTime;


    constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

    signin(email: any,password: any): Observable<any> {
        return this.http.post<any>(this.baseUrl + 'signin', {email,password}, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}).pipe(map((resp) => {
            sessionStorage.setItem("email",resp.email)
this.setId(resp.user.id)
          sessionStorage.setItem("token",`Bearer ${resp.token}`)

          this.setRoles(resp.user.userRoles)

          setTimeout(() => {
            sessionStorage.removeItem("token");
          }, 5000000); 
          setTimeout(() => {
            sessionStorage.removeItem("email");
          }, 5000000);

          
            return resp;
        }));
        this.isLoggedIn = true;
    }

    public setRoles(roles: []) {
        sessionStorage.setItem('roles', JSON.stringify(roles));
      }
      public setId(id:string) {
        sessionStorage.setItem('id', JSON.stringify(id));
      }

      public getId(): [] {
        const id = sessionStorage.getItem('id');
     if (id !== null) {
       return JSON.parse(id);
        }
     return [];
      }

      public getRoles(): [] {
        const roles = sessionStorage.getItem('roles');
     if (roles !== null) {
       return JSON.parse(roles);
        }
     return [];
      }

    signup(request: Request): Observable<any> {
        return this.http.post<any>(this.baseUrl + 'signup', request, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'}).pipe(map((resp) => {                                                         
            return resp;
        }));
    }


    
    userActive(email: any,password: any): Observable<any>{
        return this.http.post<any>(`${this.baseUrl}active`,{email,password}).pipe(
          map(
            response => {
              return response;
            }
          )
        )
      }


    activeAccount(mail: any,code: any):Observable<any>{
        return this.http.post<any>(`${this.baseUrl}activated`,{mail,code}).pipe(
          map(
            response => {
              return response;
            }
          )
        )
      }
    
      checkEmail(email: any):Observable<any>{
        return this.http.post<any>(`${this.baseUrl}checkEmail`,{email}).pipe(
          map(
            response => {
              return response;
            }
          )
        )
      }
    
      resetPassword(email: any,code: any,password: any):Observable<any>{
        return this.http.post<any>(`${this.baseUrl}resetPassword`,{email,code,password}).pipe(
          map(
            response => {
              return response;
            }
          )
        )
      }

    signout() {
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('id');

        sessionStorage.removeItem('token');
sessionStorage.removeItem('roles');
        this.router.navigateByUrl('/login');

    }

    isUserSignedin() {
        return sessionStorage.getItem('token') !== null;
        
    }

    getSignedinUser() {
        return sessionStorage.getItem('user') as string;
        
    }
    getSignInPhoneNumber() {
        return sessionStorage.getItem('phone_number') as string;
        
    }
    isLogin(){
        return !(sessionStorage.getItem('email') == null ||
               sessionStorage.getItem('token') == null);
      }
    getToken() {
        let token = sessionStorage.getItem('token') as string;
        return token;
    }

}