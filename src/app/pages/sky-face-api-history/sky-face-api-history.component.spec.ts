import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyFaceApiHistoryComponent } from './sky-face-api-history.component';

describe('SkyFaceApiHistoryComponent', () => {
  let component: SkyFaceApiHistoryComponent;
  let fixture: ComponentFixture<SkyFaceApiHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkyFaceApiHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyFaceApiHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
