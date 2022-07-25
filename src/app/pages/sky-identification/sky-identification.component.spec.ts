import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyIDentificationComponent } from './sky-identification.component';

describe('SkyIDentificationComponent', () => {
  let component: SkyIDentificationComponent;
  let fixture: ComponentFixture<SkyIDentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkyIDentificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyIDentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
