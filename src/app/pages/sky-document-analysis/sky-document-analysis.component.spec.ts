import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyDocumentAnalysisComponent } from './sky-document-analysis.component';

describe('SkyDocumentAnalysisComponent', () => {
  let component: SkyDocumentAnalysisComponent;
  let fixture: ComponentFixture<SkyDocumentAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkyDocumentAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyDocumentAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
