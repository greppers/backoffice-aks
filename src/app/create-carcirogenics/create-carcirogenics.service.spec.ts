import { TestBed } from '@angular/core/testing';

import { CreateCarcirogenicsService } from './create-carcirogenics.service';

describe('CreateCarcirogenicsService', () => {
  let service: CreateCarcirogenicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateCarcirogenicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
