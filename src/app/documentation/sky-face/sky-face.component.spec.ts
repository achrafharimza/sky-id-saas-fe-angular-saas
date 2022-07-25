import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyFaceComponent } from './sky-face.component';

describe('SkyFaceComponent', () => {
  let component: SkyFaceComponent;
  let fixture: ComponentFixture<SkyFaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkyFaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
