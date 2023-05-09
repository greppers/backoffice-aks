import { Component, OnInit } from '@angular/core';
import { CarcirogenicsService } from './carcirogenics.service';

@Component({
  selector: 'app-carcirogenics',
  templateUrl: './carcirogenics.component.html',
  styleUrls: ['./carcirogenics.component.css'],
})
export class CarcirogenicsComponent implements OnInit {
  carcirogenics: any;

  constructor(private carcirogenicsService: CarcirogenicsService) {}

  ngOnInit(): void {
    this.carcirogenicsService
      .getCarcirogenics()
      .subscribe((data) => (this.carcirogenics = data));
  }
  deleteElement(carcirogenicElementId:number){
    console.log(carcirogenicElementId+"hello")
    this.carcirogenicsService.deleteCarcirogenic(carcirogenicElementId);

  }
}
