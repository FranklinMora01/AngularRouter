import { TestBed } from '@angular/core/testing';

import { FotografiaServiceService } from './fotografia-service.service';

describe('FotografiaServiceService', () => {
  let service: FotografiaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FotografiaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
