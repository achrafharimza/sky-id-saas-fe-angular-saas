import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyFaceApiDocComponent } from './sky-face-api-doc.component';

describe('SkyFaceApiDocComponent', () => {
  let component: SkyFaceApiDocComponent;
  let fixture: ComponentFixture<SkyFaceApiDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkyFaceApiDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyFaceApiDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
