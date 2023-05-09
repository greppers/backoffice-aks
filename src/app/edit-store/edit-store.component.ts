import { Component, OnInit } from '@angular/core';
import { EditStoreService } from './edit-store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.css'],
})
export class EditStoreComponent implements OnInit {
  store:
    | {
        name: string;
        description: string;
        logo: string;
        storeImage: string;
        // imageUrls: any;
      }
    | any = {
    name: '',
    description: '',
    logo: '',
    storeImage: '',
    // imageUrls: [],
  };
  logo: any;
  banner: any;
  id: number = this.route.snapshot.params['id'];
  data: FormData = new FormData();
  constructor(
    private editStoreService: EditStoreService,
    private route: ActivatedRoute
  ) {}
  public saveLogo(files: any) {
    this.logo = files.target.files[0];
  }
  public saveBanner(files: any) {
    this.banner = files.target.files[0];
  }
  ngOnInit(): void {
    this.editStoreService
      .getStore(this.id)
      .subscribe((data) => (this.store = data));
    console.log(this.store);
  }
  public submitForm() {
    console.log("hello");
    
    this.data.append(
      'store',
      JSON.stringify({
        name: this.store.name,
        description: this.store.description,
      })
    );
    this.data.append('logo', this.logo);
    this.data.append('banner', this.banner);
    // const id = this.route.snapshot.params['id'];
    this.editStoreService.editStore(this.id, this.data);
  }
}
