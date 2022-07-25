import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyIdentificationHistoryComponent } from './sky-identification-history.component';

describe('SkyIdentificationHistoryComponent', () => {
  let component: SkyIdentificationHistoryComponent;
  let fixture: ComponentFixture<SkyIdentificationHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkyIdentificationHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyIdentificationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
