import { TestBed } from '@angular/core/testing';

import { CustDetailsService } from './cust-details.service';

describe('CustDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustDetailsService = TestBed.get(CustDetailsService);
    expect(service).toBeTruthy();
  });
});
