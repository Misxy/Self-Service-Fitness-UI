import { TestBed } from '@angular/core/testing';

import { AgreementAndPoliciesService } from './agreement-and-policies.service';

describe('AgreementAndPoliciesService', () => {
  let service: AgreementAndPoliciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgreementAndPoliciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
