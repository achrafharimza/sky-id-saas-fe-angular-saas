import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyIdWebcamComponent } from './sky-id-webcam.component';

describe('SkyIdWebcamComponent', () => {
  let component: SkyIdWebcamComponent;
  let fixture: ComponentFixture<SkyIdWebcamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkyIdWebcamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyIdWebcamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
