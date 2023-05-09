import { Component, OnInit } from '@angular/core';
import { CreateCarcirogenicsService } from './create-carcirogenics.service';

@Component({
  selector: 'app-create-carcirogenics',
  templateUrl: './create-carcirogenics.component.html',
  styleUrls: ['./create-carcirogenics.component.css'],
})
export class CreateCarcirogenicsComponent implements OnInit {
  carcirogenic = { name: '', toxicityScore: 0 };
  carcirogenics: any[] = [];
  constructor(private createCarcirogenicsService:CreateCarcirogenicsService) {}

  ngOnInit(): void {}
  public addCarcirogenic(event: any) {
    if (!this.carcirogenic.name || !this.carcirogenic.toxicityScore) {
      return;
    }
    this.carcirogenics.push(this.carcirogenic);
    this.carcirogenic = { name: '', toxicityScore: 0 };
  }
  public popCarcirogenic(carcirogenicToPop: any) {
    const index = this.carcirogenics.findIndex(
      (el) => el.name === carcirogenicToPop.name
    );
    if (index !== -1) {
      this.carcirogenics.splice(index, 1);
    }
  }
  public submitForm(){
    this.createCarcirogenicsService.addAllElements(this.carcirogenics);
  }
}
