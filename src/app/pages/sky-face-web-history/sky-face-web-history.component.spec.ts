import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyFaceWebHistoryComponent } from './sky-face-web-history.component';

describe('SkyFaceWebHistoryComponent', () => {
  let component: SkyFaceWebHistoryComponent;
  let fixture: ComponentFixture<SkyFaceWebHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkyFaceWebHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyFaceWebHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
