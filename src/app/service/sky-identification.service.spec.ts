import { TestBed } from '@angular/core/testing';

import { SkyIdentificationService } from './sky-identification.service';

describe('SkyIdentificationService', () => {
  let service: SkyIdentificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkyIdentificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
