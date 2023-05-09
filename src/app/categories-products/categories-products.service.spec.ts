import { TestBed } from '@angular/core/testing';

import { CategoriesProductsService } from './categories-products.service';

describe('CategoriesProductsService', () => {
  let service: CategoriesProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
