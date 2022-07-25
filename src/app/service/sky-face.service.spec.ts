import { TestBed } from '@angular/core/testing';

import { SkyFaceService } from './sky-face.service';

describe('SkyFaceService', () => {
  let service: SkyFaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkyFaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
