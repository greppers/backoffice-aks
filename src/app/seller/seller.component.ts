import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { SellerService } from './seller.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
   sellerDetails = null as any ;

   username: string = '';
	password: string = '';
  email: string = '';
	phone_number: string = '';

	user_roles: any = [
		{name:'Client', value:'Client', selected: false},
		{name:'Marchant', value:'Marchant', selected: false},
	]

	selectedRoles: string[] = [];

	error: string = '';
	success: string = '';
    sellerToUpdate={
    id:"",
    username:"",
    email:"",
    phone_number:"",
    active:""
   }

studentToUpdate = {
  username:"",
  email:"",
  phone_number:"",
  active:"",
  id:null
}
totalClients!: number;
  totalMarchants!: number;
  totalUsers!: number;
  totalAdmins!: number;

showForm= false ;
  constructor(private renderer: Renderer2, private elRef: ElementRef, private sellerService: SellerService,private http: HttpClient) {
    this.getSellersDetails();
   }


   
  ngOnInit() {
    this.http.get(' http://localhost:8080/users').subscribe((data: any) => {
      this.totalClients = data['totalClients'];
      this.totalMarchants = data['totalMarchants'];
      this.totalUsers = data['totalUsers'];
      this.totalAdmins = data['totalAdmins'];


   });
    
  }
getSellersDetails(){
  this.sellerService.getSellers().subscribe(
    (resp) => {
      console.log(resp);
      this.sellerDetails = resp;
    },
    (err)=>{
      console.log(err);
    }
  );
}
edit(seller: any){
  this.studentToUpdate=seller;
}
updateSeller(){
  this.sellerService.updateSellers(this.sellerToUpdate).subscribe(
    (resp)=>{
      console.log(resp);
    },
    (err)=>{
      console.log(err);
    }
  );
}
deleteSeller(seller:any){
  this.sellerService.deleteSellers(seller.id).subscribe(
    (resp)=>{
      console.log(resp);
      this.getSellersDetails();
    },
    (err)=>{
      console.log(err);
    }
  );
}


updateUser(){
  this.sellerService.updateSellers(this.studentToUpdate).subscribe(
    (resp) => {
      console.log(resp);
      this.showForm = false;

    },
    (err) => {
      console.log(err);
    }
  );
}

openForm(seller: any){
  this.studentToUpdate = seller;
  this.showForm = true;

}

closeForm(){
  this.showForm = false;
}




}
