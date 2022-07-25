import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiskyComponent } from './apisky.component';

describe('ApiskyComponent', () => {
  let component: ApiskyComponent;
  let fixture: ComponentFixture<ApiskyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiskyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiskyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
