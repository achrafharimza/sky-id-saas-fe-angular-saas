import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyDocumentAnalysisMobileDocumentationComponent } from './sky-document-analysis-mobile-documentation.component';

describe('SkyDocumentAnalysisMobileDocumentationComponent', () => {
  let component: SkyDocumentAnalysisMobileDocumentationComponent;
  let fixture: ComponentFixture<SkyDocumentAnalysisMobileDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkyDocumentAnalysisMobileDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyDocumentAnalysisMobileDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
