import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyFaceWebDemoComponent } from './sky-face-web-demo.component';

describe('SkyFaceWebDemoComponent', () => {
  let component: SkyFaceWebDemoComponent;
  let fixture: ComponentFixture<SkyFaceWebDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkyFaceWebDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyFaceWebDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
