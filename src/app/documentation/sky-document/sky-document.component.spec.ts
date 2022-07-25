import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyDocumentComponent } from './sky-document.component';

describe('SkyDocumentComponent', () => {
  let component: SkyDocumentComponent;
  let fixture: ComponentFixture<SkyDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkyDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
