import { TestBed } from '@angular/core/testing';

import { EditStoreService } from './edit-store.service';

describe('EditStoreService', () => {
  let service: EditStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
