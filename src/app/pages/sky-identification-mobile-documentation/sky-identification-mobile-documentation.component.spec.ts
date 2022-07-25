import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyIDentificationMobileDocumentationComponent } from './sky-identification-mobile-documentation.component';

describe('SkyIDentificationMobileDocumentationComponent', () => {
  let component: SkyIDentificationMobileDocumentationComponent;
  let fixture: ComponentFixture<SkyIDentificationMobileDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkyIDentificationMobileDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyIDentificationMobileDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
