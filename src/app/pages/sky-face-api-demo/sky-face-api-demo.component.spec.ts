import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyFaceApiDemoComponent } from './sky-face-api-demo.component';

describe('SkyFaceApiDemoComponent', () => {
  let component: SkyFaceApiDemoComponent;
  let fixture: ComponentFixture<SkyFaceApiDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkyFaceApiDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyFaceApiDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
