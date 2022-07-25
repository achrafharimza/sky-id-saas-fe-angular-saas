import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyIdentificationComponent } from './sky-identification.component';

describe('SkyIdentificationComponent', () => {
  let component: SkyIdentificationComponent;
  let fixture: ComponentFixture<SkyIdentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkyIdentificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
