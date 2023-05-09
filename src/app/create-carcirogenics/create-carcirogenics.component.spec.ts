import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCarcirogenicsComponent } from './create-carcirogenics.component';

describe('CreateCarcirogenicsComponent', () => {
  let component: CreateCarcirogenicsComponent;
  let fixture: ComponentFixture<CreateCarcirogenicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCarcirogenicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCarcirogenicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
