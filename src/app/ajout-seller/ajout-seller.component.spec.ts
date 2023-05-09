import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutSellerComponent } from './ajout-seller.component';

describe('AjoutSellerComponent', () => {
  let component: AjoutSellerComponent;
  let fixture: ComponentFixture<AjoutSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
