import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToxicProductComponent } from './toxic-product.component';

describe('ToxicProductComponent', () => {
  let component: ToxicProductComponent;
  let fixture: ComponentFixture<ToxicProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToxicProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToxicProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
