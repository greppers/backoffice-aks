import { Component } from '@angular/core';
import { StoresService } from './stores.service';
import { Observable } from 'rxjs';
import { isAdmin,isMarchant,id } from '../utils/getRole';
import { Store, Vendor } from '../utils/intergaces';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css'],
})
export class StoresComponent {
  stores: Store[]|null;
  vendor:Vendor|null;
  constructor(private storesServices: StoresService) {
    this.vendor=null
    this.stores=null
    // this.stores = this.storesServices.getStores();
  }
  ngOnInit(): void {
    // this.stores = this.storesServices.getStores().subscribe();
    if (isAdmin) 
    this.storesServices.getStores().subscribe(stores=>this.stores=stores);
    if (isMarchant){ 
     this.storesServices.getVendor(id).subscribe(vendor=>{this.stores=vendor.stores;console.log(this.stores)});
    //  this.stores=this.vendor?.stores;
    }
  }
  deleteStore(id: number) {
    this.storesServices.deleteStore(id);
    this.storesServices.getStores().subscribe(stores=>this.stores=stores);
    window.location.reload();

  }
}
