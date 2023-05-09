import { TestBed } from '@angular/core/testing';

import { CarcirogenicsService } from './carcirogenics.service';

describe('CarcirogenicsService', () => {
  let service: CarcirogenicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarcirogenicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
