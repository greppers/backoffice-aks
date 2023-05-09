import { TestBed } from '@angular/core/testing';

import { AddStoreService } from './add-store.service';

describe('AddStoreService', () => {
  let service: AddStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
