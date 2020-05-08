import { TestBed } from '@angular/core/testing';

import { GolfApiService } from './golf-api.service';

describe('GolfApiService', () => {
  let service: GolfApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GolfApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
