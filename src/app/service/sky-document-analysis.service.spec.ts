import { TestBed } from '@angular/core/testing';

import { SkyDocumentAnalysisService } from './sky-document-analysis.service';

describe('SkyDocumentAnalysisService', () => {
  let service: SkyDocumentAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkyDocumentAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
