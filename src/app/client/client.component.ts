import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';
import { SellerService } from '../seller/seller.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  sellerDetails = null as any ;

  username: string = '';
 password: string = '';
 email: string = '';
 phone_number: string = '';
 showForm= false ;
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
 constructor(private sellerService: ClientService,private sellservice: SellerService) {
   this.getSellersDetails();
  }

 ngOnInit(): void {
 }
getSellersDetails(){
 this.sellerService.getClients().subscribe(
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
 this.sellerToUpdate=seller;
}

deleteSeller(client:any){
 this.sellservice.deleteSellers(client.id).subscribe(
   (resp)=>{
     console.log(resp);
     this.getSellersDetails();
   },
   (err)=>{
     console.log(err);
   }
 );
}


updateSeller(){
  this.sellservice.updateSellers(this.studentToUpdate).subscribe(
    (resp)=>{
      console.log(resp);
    },
    (err)=>{
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



