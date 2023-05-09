import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarcirogenicsComponent } from './carcirogenics.component';

describe('CarcirogenicsComponent', () => {
  let component: CarcirogenicsComponent;
  let fixture: ComponentFixture<CarcirogenicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarcirogenicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarcirogenicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
