import { TestBed } from '@angular/core/testing';

import { PolicywiseService } from './policywise.service';

describe('PolicywiseService', () => {
  let service: PolicywiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolicywiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
