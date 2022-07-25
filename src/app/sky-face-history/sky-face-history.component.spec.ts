import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyFaceHistoryComponent } from './sky-face-history.component';

describe('SkyFaceHistoryComponent', () => {
  let component: SkyFaceHistoryComponent;
  let fixture: ComponentFixture<SkyFaceHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkyFaceHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyFaceHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
