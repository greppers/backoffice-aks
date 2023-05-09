import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate{

  constructor(private router : Router) { }
  role = sessionStorage.getItem("role");
  canActivate():boolean{
    if (this.role==="Admin" || this.role==="Marchant"){
      return true;
    }
    else{
      this.router.navigate(['/forbiden']);
      return false;
    }
  }
}
