import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyIdentificationDocumentationComponent } from './sky-identification-documentation.component';

describe('SkyIdentificationDocumentationComponent', () => {
  let component: SkyIdentificationDocumentationComponent;
  let fixture: ComponentFixture<SkyIdentificationDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkyIdentificationDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyIdentificationDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
