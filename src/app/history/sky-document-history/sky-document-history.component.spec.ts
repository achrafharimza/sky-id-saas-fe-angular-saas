import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyDocumentHistoryComponent } from './sky-document-history.component';

describe('SkyDocumentHistoryComponent', () => {
  let component: SkyDocumentHistoryComponent;
  let fixture: ComponentFixture<SkyDocumentHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkyDocumentHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyDocumentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
