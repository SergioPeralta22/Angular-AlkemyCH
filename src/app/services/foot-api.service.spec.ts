import { TestBed } from '@angular/core/testing';

import { FootAPIService } from './foot-api.service';

describe('FootAPIService', () => {
  let service: FootAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
