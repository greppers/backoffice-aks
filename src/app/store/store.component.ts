import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  storeData: any;
  store: any;
  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.storeService.getStore(id).subscribe((data) => {this.store = data;console.log(data)});
    console.log(this.store)
  }
  deleteProduct(id: number): void {
    const idGet = this.route.snapshot.params['id'];
    this.storeService.removeProduct(id).subscribe((data:any) => console.log(data));
    this.storeService.getStore(idGet).subscribe((data) => (this.store = data));
  }
}
