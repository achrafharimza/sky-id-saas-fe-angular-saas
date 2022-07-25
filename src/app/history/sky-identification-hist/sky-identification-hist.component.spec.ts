import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyIdentificationHistComponent } from './sky-identification-hist.component';

describe('SkyIdentificationHistComponent', () => {
  let component: SkyIdentificationHistComponent;
  let fixture: ComponentFixture<SkyIdentificationHistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkyIdentificationHistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyIdentificationHistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
