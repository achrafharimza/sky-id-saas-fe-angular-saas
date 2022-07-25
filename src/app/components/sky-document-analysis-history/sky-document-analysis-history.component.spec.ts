import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyDocumentAnalysisHistoryComponent } from './sky-document-analysis-history.component';

describe('SkyDocumentAnalysisHistoryComponent', () => {
  let component: SkyDocumentAnalysisHistoryComponent;
  let fixture: ComponentFixture<SkyDocumentAnalysisHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkyDocumentAnalysisHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyDocumentAnalysisHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
